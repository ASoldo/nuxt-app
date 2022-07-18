<template>
<client-only>
    <Vue3Lottie :animationData="lottieAnimation" :height="200" :width="200" />
</client-only>
</template>

<script setup lang="ts">

import lottieAnim from '~/assets/header.json'
const lottieAnimation = ref(lottieAnim)

</script>