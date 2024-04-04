<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
        
        <hero-main />

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

        <feature-blocks 
            :content='{
                "theme": "",
                "label": "What we offer",
                "heading": "A selection of what we can do",
                "subheading": "Some optional descriptuve subheading",
                "cards": [
                    {
                        "theme": null,
                        "img": "",
                        "heading": "Card heading",
                        "subheading": "Subheading",
                        "description": "Pellentesque sagittis accumsan lectus, vel finibus mi tempus sit amet. Nam quis augue a odio fringilla.",
                        "button": {
                            "text": "Read more",
                            "url": "/"
                        }
                    },
                    {
                        "theme": null,
                        "img": "",
                        "heading": "Card heading",
                        "subheading": "Subheading",
                        "description": "Pellentesque sagittis accumsan lectus, vel finibus mi tempus sit amet. Nam quis augue a odio fringilla.",
                        "button": {
                            "text": "Read more",
                            "url": "/"
                        }
                    },
                    {
                        "theme": null,
                        "img": "",
                        "heading": "Card heading",
                        "subheading": "Subheading",
                        "description": "Pellentesque sagittis accumsan lectus, vel finibus mi tempus sit amet. Nam quis augue a odio fringilla.",
                        "button": {
                            "text": "Read more",
                            "url": "/"
                        }
                    },
                ]
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