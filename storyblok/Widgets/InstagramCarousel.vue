<template>
    <div
        v-editable="blok"
        class="instagram-carousel"
        :style="{ 
            backgroundColor: blok.bgColour.value 
        }"
    >
        <div class="content-container">
            <h2
                :class="[
                    blok.headingFontSize
                ]"
                v-if="blok?.heading?.length"
            >
                {{ blok.heading }}
            </h2>

            <h4
                :class="[
                    blok.subheadingFontSize
                ]"
                v-if="blok?.subheading?.length"
            >
                {{ blok.subheading }}
            </h4>

            <iframe 
                src="https://widget.tagembed.com/158934?view" 
                style=" width:100%;height:350px;overflow: auto;" 
                frameborder="0" 
                allowtransparency="true">
            </iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'instagramCarousel',
        props: {
            componentName: {
                type: String,
                default: 'instagram-carousel'
            },
        },
        props: {
            blok: {
                type: Object
            }
        },
    }
</script>



<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .instagram-carousel {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 5rem;
        justify-content: center;
        padding: 4rem;
        text-align: center;

        @media only screen and (max-width: 600px) {
            flex-direction: column-reverse;
            padding: 1rem;
        }

        .content-container {
            padding: 1rem;
            width: 100%;

            @media only screen and (max-width: 600px) {
                width: 100%;
            }

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

            .h1-size {
                font-size: $h1-font-size;
            }

            .h2-size {
                font-size: $h2-font-size;
            }

            .h3-size {
                font-size: $h3-font-size;
            }

            .h4-size {
                font-size: $h4-font-size;
            }

            .h5-size {
                font-size: $h5-font-size;
            }
        }

        .iframe-container {
            border: 2px solid $color-1;
            box-shadow: 1rem 1rem 0 0 $color-1;
            width: auto;

            @media only screen and (max-width: 600px) {
                width: calc(100vw - 3rem);
            }

            iframe {
                width: 500px !important;

                @media only screen and (max-width: 600px) {
                    width: calc(100vw - 3.5rem) !important;
                }
            }
        }
    }
</style>