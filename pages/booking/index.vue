<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('booking', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )

    useHead({
        title: 'ForbeautysSake | Book today',
        meta: [
            {
                name: 'description',
                content: 'It is quick and easy to book your next appointment. Just pick your treatment, pick a date and time that suits you and confirm. It\'s that simple, what are you waiting for!'
            },
            {
                property: 'og:title',
                content: 'ForbeautysSake | Book today'
            },
            {
                property: 'og:description',
                content: 'It is quick and easy to book your next appointment. Just pick your treatment, pick a date and time that suits you and confirm. It\'s that simple, what are you waiting for!'
            },
        ]
    })
</script>