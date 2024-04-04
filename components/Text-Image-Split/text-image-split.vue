<template>
    <section
        :class="[
            componentName,
            'theme-' + content.theme,
            'order-' + content.order,
        ]"
    >
        <div class="content-container">
            <p class="description-header">{{ content.label }}</p>

            <h1>
                {{ content.heading }}
            </h1>

            <h4>
                {{ content.subheading }}
            </h4>

            <p>
                {{ content.description }}
            </p>
        </div>

        <div class="img-container">
            <img 
                src="~/assets/images/test.jpg" 
                alt=""
            >
        </div>
    </section>
</template>

<script>
    export default {
        name: 'textImageSplit',
        props: {
            componentName: {
                type: String,
                default: 'text-image-split'
            },
            content: {
                default: () => ({
                    "theme": "dark",
                    "order": "image-text",
                    "label": "section label",
                    "heading": "section heading secondary",
                    "subheading": "optional section subheading",
                    "description": "optional desciptive text",
                    "button": {
                        "text": "Read more",
                        "url": "/"
                    },
                    "image": {
                        "url": "",
                        "alt": ""
                    }
                }),
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .text-image-split {
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