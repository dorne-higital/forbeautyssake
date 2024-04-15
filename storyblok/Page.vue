<template>
  <div v-editable="blok" class="px-4">
    <StoryblokComponent 
      v-for="blok in blok.nav" 
      :key="blok._uid" 
      :blok="blok" 
    />

    <StoryblokComponent 
      v-for="blok in blok.body" 
      :key="blok._uid" 
      :blok="blok" 
    />
    
    <StoryblokComponent 
      v-for="blok in blok.footer" 
      :key="blok._uid" 
      :blok="blok" 
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
