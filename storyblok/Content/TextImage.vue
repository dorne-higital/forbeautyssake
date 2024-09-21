<template>
    <section
        v-editable="blok"
        :style="{ 
            backgroundColor: blok.bgColour.value 
        }"
        class="text-image"
    >
        <div class="content-container">
            <p class="description-header">{{ blok.label }}</p>

            <h2>
                {{ blok.heading }}
            </h2>

            <h4>
                {{ blok.subheading }}
            </h4>

            <p>
                {{ blok.description }}
            </p>
        </div>

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
        name: 'textImage',
        props: {
            componentName: {
                type: String,
                default: 'text-image'
            },
            blok: {
                type: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .text-image {
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
            flex: 1;
            padding: 1rem 2rem;
            width: 50%;

            @media (max-width: 600px) {
                padding: 1rem;
                width: 100%;
            }
        }

        .img-container {
            flex: 1;
            width: 50%;

            @media (max-width: 600px) {
                width: 100%;
            }

            img {
                max-height: 30rem;
                width: 100%;
                object-fit: cover;

                @media (max-width: 600px) {
                    max-height: 20rem;
                }
            }
        }
    }
</style>