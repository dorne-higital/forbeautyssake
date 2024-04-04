<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
        
        <text-image-split 
            :content='{
                "theme": "color-2",
                "order": "image-text",
                "label": "Who we are",
                "heading": "For Beauty&apos;s Sake",
                "subheading": "Discover Brow Perfection: Where Elegance Meets Expertise",
                "description": "some descriptive text goes here. some descriptive text goes here. some descriptive text goes here. some descriptive text goes here. "
            }'
        />

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