<template>
    <div>
        <h1>{{ treatment.title }}</h1>

        <div v-html="treatment.content"></div>
    </div>
</template>
  
<script>
    export default {
        async asyncData({ $storyapi, params }) {
            const { data } = await $storyapi.get(`cdn/stories/treatments/${params.slug}`);
            
            return {
                treatment: {
                    title: data.story.content.title,
                    content: data.story.content.body, // Assuming the body field contains the treatment content
                },
            };
        },
    };
</script>
  