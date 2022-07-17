<template>
    <div>
        {{blok.title}}
    </div>
</template>

<script setup lang="ts">
defineProps({
    blok: {
        type: Object,
        default: ()=> {{}}
    }
})
</script>