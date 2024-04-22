<template>
    <div>
        <ul>
            <li v-for="treatment in treatments" :key="treatment.slug">
                <nuxt-link :to="`/treatment/${treatment.slug}`">{{ treatment.title }}</nuxt-link>
            </li>
        </ul>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script>
    // const story = await useAsyncStoryblok('treatments', { version: 'draft' },
    //     { 
    //     customParent: 'https://app.storyblok.com' 
    //     }
    // )

    export default {
        async asyncData({ $storyapi }) {
            const { data } = await $storyapi.get('cdn/stories', {
                starts_with: 'treatment/',
                sort_by: 'content.title:asc',
            });
            return {
                treatments: data.stories.map((story) => ({
                    title: story.content.title,
                    slug: story.slug,
                })),
            };
        },
    };
</script>