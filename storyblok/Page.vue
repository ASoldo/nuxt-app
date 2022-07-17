<template>
    <div v-editable="blok">
        <StoryblokComponent v-for="element in blok.body" :key="blok._uid" :blok="element" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    blok: {
        type: Object,
        default: ()=> {
            {}
        }
    }
})

</script>