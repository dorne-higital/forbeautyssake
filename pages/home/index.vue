<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />

        <text-1-col 
            :content='{
                "theme": "",
                "align": "centre",
                "heading": "For Beauty&apos;s Sake",
                "subheading": "Discover Brow Perfection: Where Elegance Meets Expertise",
                "button": {
                    "text": "Read more",
                    "url": "about"
                }
            }'
        />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('home', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )
</script>