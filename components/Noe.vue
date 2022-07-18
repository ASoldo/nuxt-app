<template>
  <div>
    <slot></slot>
    <slot name="noe-name" />
    <slot name="noe-age" />
    <h1>{{ props?.ime }}</h1>
    <button @click="soldo">Click</button>
    <!-- <div ref="pixiid" style="width: 100%; height:100%;"></div> -->
  </div>
</template>

<script setup lang="ts">
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
// const pixiid = ref(null);

// onMounted(async ()=> {
//   const PIXI = await import('pixi.js');
//   let app = new PIXI.Application()
//   pixiid.value.appendChild(app.view)

//   app.loader.add('bunny', '/img/Bunny.png').load((loader, resources) => {
//     // This creates a texture from a 'bunny.png' image.
//     const bunny = new PIXI.Sprite(resources.bunny.texture);

//     // Setup the position of the bunny
//     bunny.x = app.renderer.width / 2;
//     bunny.y = app.renderer.height / 2;

//     // Rotate around the center
//     bunny.anchor.x = 0.5;
//     bunny.anchor.y = 0.5;

//     // Add the bunny to the scene we are building.
//     app.stage.addChild(bunny);

//     // Listen for frame updates
//     app.ticker.add(() => {
//          // each frame we spin the bunny around a bit
//         bunny.rotation += 0.01;
//     });
// })})
</script>

<style>
canvas{
  width: 100%;
  height: 100%;
}</style>
