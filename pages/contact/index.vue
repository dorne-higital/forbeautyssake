<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />

        <!-- <iframe src="https://widget.tagembed.com/158934?view" style=" width:100%;height:500px;overflow: auto;" frameborder="0" allowtransparency="true"></iframe>    </div> -->
</template>

<script setup>
    const story = await useAsyncStoryblok('contact', { version: 'draft' },
        { 
        customParent: 'https://app.storyblok.com' 
        }
    )
</script>