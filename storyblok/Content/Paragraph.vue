<template>
    <section
        v-editable="blok"
        :class="[
            componentName,
        ]"
    >
        <div 
            class="content-container"
        >
            <div
                v-if="blok?.paragraph?.length"
                class="paragraph"
                v-html="renderRichText(blok.paragraph)"
            ></div>
        </div>
    </section>
</template>

<script>
	import { renderRichText } from '@storyblok/vue';

    export default {
        name: 'paragraph',
        props: {
            componentName: {
                type: String,
                default: 'paragraph'
            },
            blok: {
                type: String
            },
        },

		methods: {
			renderRichText(content) {
				return renderRichText(content);
			}
		}
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .paragraph {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 5rem 2rem;
        width: 100%;

        @media (max-width: 600px) {
            padding: 2rem 1rem;
            width: 100%;
        }
    }
</style>