<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('treatment/semi-perm-makeup', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )
</script>