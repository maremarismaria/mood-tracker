<script setup lang="ts">
function getRandomColor() {
  const decimalWhite = 16777215;
  const code = Math.floor(Math.random() * decimalWhite).toString(16);
  const color = Math.random() > 0.5 ? "rgba(60, 60, 60, 0.2)" : `#${code}`;
  return `background-color: ${color}`;
}
</script>

<template>
  <table>
    <tr>
      <th></th>
      <th v-for="month in 12" :key="month">{{ month }}</th>
    </tr>
    <tr v-for="day in 31" :key="day">
      <th>{{ day }}</th>
      <td v-for="month in 12" :key="month" v-bind:style="getRandomColor()"></td>
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
th {
  font-weight: bold;
}

th,
td {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
