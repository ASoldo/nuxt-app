<template>
  <client-only>
    <Renderer ref="renderer" :orbitCtrl="true" width="1920" height="1080">
      <Camera :position="{ z: 10 }" />
      <Scene>
        <DirectionalLight :position="{ x: 0, y: 100, z: 0 }" :intensity="0.5" />
        <PointLight :position="{ x: 50, y: 50, z: 50 }" />
        <PointLight :position="{ y: -50, z: -50 }" />
        <Box :rotation="{ x: 0, y: 90, z: 0 }">
          <LambertMaterial />
        </Box>
      </Scene>
    </Renderer>
  </client-only>
</template>

<script setup lang="ts">
    const renderer = ref(null);

    onMounted(() => {});
</script>
