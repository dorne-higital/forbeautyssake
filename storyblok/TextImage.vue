<template>
    <section
        v-editable="blok"
        class="text-image"
    >
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
        width: calc(100% - 4rem);

        //////////////////
        // Theme styles //
        //////////////////
        
        &.theme-dark {
            background-color: $bg-secondary;
            color: $secondary-color;
        }

        &.theme-color-1 {
            background-color: $color-1;
            color: $primary-color;
        }

        &.theme-color-2 {
            background-color: $color-2;
            color: $secondary-color;
        }

        //////////////////
        // Order styles //
        //////////////////
    
        &.order-image-text {
            flex-direction: row-reverse;
        }
    
        &.order-text-image {
            flex-direction: row;
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