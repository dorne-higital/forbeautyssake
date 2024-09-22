<template>
    <section
        v-editable="blok"
        class="quote-carousel"
    >
        <div class="content-container">
            <p 
                v-if="blok?.label?.length"
                class="description-header"
            >
                {{ blok.label }}
            </p>

            <h2 v-if="blok?.heading?.length">
                {{ blok.heading }}
            </h2>

            <h4 v-if="blok?.subheading?.length">
                {{ blok.subheading }}
            </h4>
        </div>

		<StoryblokComponent
			v-for="blok in blok.quotes"
			:key="blok._uid"
			:blok="blok"
		/>

    </section>
</template>

<script>
    export default {
        name: 'quoteCarousel',
        components: {
        },
        props: {
            componentName: {
                type: String,
                default: 'quote-carousel'
            },
            blok: {
                type: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .quote-carousel {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 5rem 2rem;
        width: 100%;

        @media (max-width: 600px) {
            flex-direction: column;
            padding: 2rem 1rem;
            width: 100%;
        }
    }
</style>