<template>
  <div>
    <slot></slot>
    <slot name="noe-name" />
    <slot name="noe-age" />
    <h1>{{ props?.ime }}</h1>
    <button @click="soldo">Click</button>
  </div>
</template>

<script setup>
const props = defineProps({
  ime: {
    type: String,
    default: "mnmn",
  },
});

const emits = defineEmits(["soldo-emit"]);

const soldo = function () {
  console.log("Soooldo je okinuo");
  emits("soldo-emit", {
    broj: 1000,
  });
};
</script>
