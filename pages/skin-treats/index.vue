<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('skin-treats', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )
</script>