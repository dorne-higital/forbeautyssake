<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('nails-by-charlotte', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )

    useHead({
        title: 'ForbeautysSake | Nails by Charlottoe',
        meta: [
            {
                name: 'description',
                content: 'The best way to reach us is via social media, through Facebook or Instagram. Alternatively, please feel free to email us, or pop in and speak directly with us.'
            },
            {
                property: 'og:title',
                content: 'ForbeautysSake | Nails by Charlotte'
            },
            {
                property: 'og:description',
                content: 'The best way to reach us is via social media, through Facebook or Instagram. Alternatively, please feel free to email us, or pop in and speak directly with us.'
            },
        ]
    })
</script>