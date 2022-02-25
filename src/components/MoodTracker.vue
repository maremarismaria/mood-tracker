<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "@vue/reactivity";
import type { DayInfo } from "@/types";
import { Mood } from "@/types";
import { getStore, updateStore } from "@/utils/Storage";
import GenericModal from "@/components/GenericModal.vue";

const data: Ref<DayInfo[]> = ref([]);
const currentMood: Ref<Mood> = ref(Mood.Unset);
const modalOpened: Ref<boolean> = ref(false);

const setInitialData = () => {
  const _data = getStore();
  data.value = _data ? _data : data.value;
};

onMounted(() => {
  setInitialData();
});

const updateData = ({ day, month, color }: DayInfo) => {
  let _data = [...data.value];
  let alreadyStored = false;

  for (let i = 0; i < _data.length; i++) {
    if (day === _data[i].day && month === _data[i].month) {
      alreadyStored = true;
      _data[i] = { ..._data[i], color };
    }
  }

  if (!alreadyStored) {
    _data = [..._data, { day, month, color }];
  }

  data.value = [..._data];
};

const onClickDay: (info: DayInfo, e: MouseEvent) => void = (info) => {
  updateData({ ...info, color: currentMood.value });
  updateStore(data.value);
};

const setDayColor = ({ day, month }: DayInfo) => {
  let matchedElement = {} as DayInfo;

  for (let i = 0; i < data.value.length; i++) {
    const element = data.value[i];
    if (day === element.day && month === element.month) {
      matchedElement = { ...element };
      break;
    }
  }

  if (matchedElement) {
    return `background-color: ${matchedElement.color}`;
  }
};

function getCurrentMoodName() {
  return Object.keys(Mood).find(
    (key) => Mood[key as keyof typeof Mood] === currentMood.value
  );
}

function getCurrentMoodBackground() {
  return `background-color: ${currentMood.value}`;
}

function getMoodItemBackground(mood: Mood) {
  return `background-color: ${mood}`;
}

function closeModal() {
  modalOpened.value = false;
}

function openModal() {
  modalOpened.value = true;
}

function selectMood(mood: Mood, event: MouseEvent) {
  currentMood.value = mood;
  closeModal();
}
</script>

<template>
  <div class="current-mood" @click="openModal">
    <div
      class="current-mood-color"
      v-bind:style="getCurrentMoodBackground()"
    ></div>
    &nbsp;<span class="mood-name">{{ getCurrentMoodName() }}</span>
  </div>
  <table>
    <tr>
      <th></th>
      <th v-for="month in 12" :key="month">{{ month }}</th>
    </tr>
    <tr v-for="day in 31" :key="day">
      <th>{{ day }}</th>
      <td
        v-for="month in 12"
        :key="month"
        @click="onClickDay({ day, month }, $event)"
        v-bind:style="setDayColor({ day, month })"
      ></td>
    </tr>
  </table>
  <GenericModal v-show="modalOpened" @close="closeModal">
    <template v-slot:header>
      <h3>Select your current mood</h3>
    </template>
    <template v-slot:body>
      <ul class="moods-list">
        <li
          class="mood-item"
          v-for="(value, key) in Mood"
          :key="value"
          @click="selectMood(value, $event)"
        >
          <div
            class="mood-color"
            v-bind:style="getMoodItemBackground(value)"
          ></div>
          &nbsp;<span class="mood-name">{{ key }}</span>
        </li>
      </ul>
    </template>
  </GenericModal>
</template>

<style scoped>
.current-mood {
  padding: 0.5em;
  font-size: 1em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 0.5em;
  cursor: pointer;
}

.current-mood-color {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid var(--vt-c-black);
}

.moods-list {
  list-style-type: none;
  padding: 0;
}

.moods-list .mood-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 0.5em;
  border: 1px solid #9e9e9e33;
  border-radius: 30px;
  background-color: #9e9e9e1a;
}

.moods-list .mood-item:not(:last-child) {
  margin-bottom: 0.5em;
}

.mood-color {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid var(--vt-c-black);
  cursor: pointer;
}

table,
tr {
  display: grid;
  grid-gap: 0.5em;
}

table {
  grid-template-rows: repeat(32, minmax(32px, 1fr));
  overflow: auto;
}

tr {
  grid-template-columns: repeat(13, minmax(32px, 1fr));
}

th,
td {
  display: flex;
  justify-content: center;
  align-items: center;
}

th {
  font-weight: bold;
}

td {
  cursor: pointer;
  border: 1px solid var(--vt-c-black-transparent);
}
</style>
