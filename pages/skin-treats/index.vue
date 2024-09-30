<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('skin-treats', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )

    useHead({
        title: 'ForbeautysSake | Skin treats',
        meta: [
            {
                name: 'description',
                content: 'At FBS we\'re passionate about helping you achieve your healthiest, most beautiful skin.'
            },
            {
                property: 'og:title',
                content: 'ForbeautysSake | Skin treats'
            },
            {
                property: 'og:description',
                content: 'At FBS we\'re passionate about helping you achieve your healthiest, most beautiful skin.'
            },
        ]
    })
</script>