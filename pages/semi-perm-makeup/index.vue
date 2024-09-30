<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('semi-perm-makeup', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )

    useHead({
        title: 'ForbeautysSake | Semi permanent make up',
        meta: [
            {
                name: 'description',
                content: 'We take great care in offering a personalised approach to ensure that your unique features and desired results are always at the forefront of what we do.'
            },
            {
                property: 'og:title',
                content: 'ForbeautysSake | Semi permanent make up'
            },
            {
                property: 'og:description',
                content: 'We take great care in offering a personalised approach to ensure that your unique features and desired results are always at the forefront of what we do.'
            },
        ]
    })
</script>