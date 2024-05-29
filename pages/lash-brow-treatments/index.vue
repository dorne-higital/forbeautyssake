<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('lash-brow-treatments', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )
</script>