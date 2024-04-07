<template>
    <section
        v-editable="blok"
        :style="{ 
            backgroundColor: blok.bgColour.value 
        }"
        class="image-text"
    >
        <div class="img-container">
            <img 
                :src="blok.image.filename" 
                :alt="blok.image.alt"
            >
        </div>

        <div class="content-container">
            <p class="description-header">{{ blok.label }}</p>

            <h1>
                {{ blok.heading }}
            </h1>

            <h4>
                {{ blok.subheading }}
            </h4>

            <p>
                {{ blok.description }}
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'imageText',
        props: {
            componentName: {
                type: String,
                default: 'image-text'
            },
            blok: {
                type: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .image-text {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 5rem 2rem;
        width: calc(100% - 4rem);

        @media (max-width: 600px) {
            flex-direction: column-reverse;
            padding: 2rem 1rem;
        }

        .content-container {
            flex: 1;
            padding: 1rem 2rem;
            width: 50%;
        }

        .img-container {
            flex: 1;
            width: 50%;

            img {
                max-height: 30rem;
                width: 100%;
                object-fit: cover;
            }
        }
    }
</style>