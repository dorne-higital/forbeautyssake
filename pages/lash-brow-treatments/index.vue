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

    useHead({
        title: 'ForbeautysSake | Waxing, brows & lashes',
        meta: [
            {
                name: 'description',
                content: 'If you\'re looking for beautifully defined brows, we offer professional brow lamination services that shape and set your brows to perfection.'
            },
            {
                property: 'og:title',
                content: 'ForbeautysSake | Waxing, brows & lashes'
            },
            {
                property: 'og:description',
                content: 'If you\'re looking for beautifully defined brows, we offer professional brow lamination services that shape and set your brows to perfection.'
            },
        ]
    })
</script>