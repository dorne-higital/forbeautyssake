<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('injectables', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )

    useHead({
        title: 'ForbeautysSake | Injectables',
        meta: [
            {
                name: 'description',
                content: 'For individuals looking for more pronounced and transformative results, we provide a comprehensive selection of injectable treatments, including vitamin injections, fat dissolvers, and skin boosters.'
            },
            {
                property: 'og:title',
                content: 'ForbeautysSake | Injectables'
            },
            {
                property: 'og:description',
                content: 'For individuals looking for more pronounced and transformative results, we provide a comprehensive selection of injectable treatments, including vitamin injections, fat dissolvers, and skin boosters.'
            },
        ]
    })
</script>