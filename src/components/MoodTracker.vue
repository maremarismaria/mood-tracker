<script setup lang="ts">
import { ref, onMounted, onUpdated } from "vue";
import type { Ref } from "@vue/reactivity";
import type { DayInfo } from "@/types";
import { getStore, updateStore } from "@/utils/Storage";
import { getRandomHexColor } from "@/utils/Color";

const data: Ref<DayInfo[]> = ref([]);

const setInitialData = () => {
  const _data = getStore();
  data.value = _data ? _data : data.value;
};

const updateData = ({ day, month, color }: DayInfo) => {
  const alreadyStored = data.value.some(
    (element) => day === element.day && month === element.month
  );

  if (!alreadyStored) {
    data.value = [...data.value, { day, month, color }];
  }
};

onMounted(() => {
  setInitialData();
});

onUpdated(() => {
  // console.log(data.value);
});

const onClickDay: (info: DayInfo, e: MouseEvent) => void = (info) => {
  const color = getRandomHexColor();
  const _data = { ...info, color };
  updateStore(_data);
  updateData(_data);
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
</script>

<template>
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
</template>

<style scoped>
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
  border: 1px solid var(--vt-c-black);
  background-color: var(--vt-c-black-transparent);
}
</style>
