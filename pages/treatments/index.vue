<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('treatments', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )

    useHead({
        title: 'ForbeautysSake | Treatments',
        meta: [
            {
                name: 'description',
                content: 'A small range of what we can offer you.'
            },
            {
                property: 'og:title',
                content: 'ForbeautysSake | Treatments'
            },
            {
                property: 'og:description',
                content: 'A small range of what we can offer you.'
            },
        ]
    })
</script>