<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('home', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )

    useHead({
        title: 'ForbeautysSake | Beauty isn\'t just vanity - it\'s self care.',
        meta: [
            {
                name: 'description',
                content: 'Amy is a highly trained beauty professional with over 8 years of experience, offering personalised treatments with a focus on ethical practices and attention to detail.'
            },
            {
                property: 'og:title',
                content: 'ForbeautysSake | Beauty isn\'t just vanity - it\'s self care.'
            },
            {
                property: 'og:description',
                content: 'Amy is a highly trained beauty professional with over 8 years of experience, offering personalised treatments with a focus on ethical practices and attention to detail.'
            },
        ]
    })
</script>