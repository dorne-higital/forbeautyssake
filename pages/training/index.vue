<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('training', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )

    useHead({
        title: 'ForbeautysSake | Training',
        meta: [
            {
                name: 'description',
                content: 'Amy is a highly trained, qualified, and insured professional who takes immense pride in ethical practices and meticulous attention to detail.'
            },
            {
                property: 'og:title',
                content: 'ForbeautysSake | Training'
            },
            {
                property: 'og:description',
                content: 'Amy is a highly trained, qualified, and insured professional who takes immense pride in ethical practices and meticulous attention to detail.'
            },
        ]
    })
</script>