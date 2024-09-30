<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('about', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )

    useHead({
        title: 'ForbeautysSake | Get to know us',
        meta: [
            {
                name: 'description',
                content: 'Amy is a highly trained, qualified, and insured professional who takes immense pride in ethical practices and meticulous attention to detail.'
            },
            {
                property: 'og:title',
                content: 'ForbeautysSake | Get to know us'
            },
            {
                property: 'og:description',
                content: 'Amy is a highly trained, qualified, and insured professional who takes immense pride in ethical practices and meticulous attention to detail.'
            },
        ]
    })
</script>