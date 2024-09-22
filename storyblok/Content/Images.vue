<template>
    <section
        v-editable="blok"
        class="images"
    >
        <div class="img-container">
            <img 
                :src="blok.image.filename" 
                :alt="blok.image.alt"
            >
        </div>
    </section>
</template>

<script>
    export default {
        name: 'images',
        components: {
        },
        props: {
            componentName: {
                type: String,
                default: 'images'
            },
            blok: {
                type: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .images {
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

		.content-container {
			margin: 0 auto;
			text-align: center;
			width: 80%;

			.quote-author {
			}
		}
    }
</style>