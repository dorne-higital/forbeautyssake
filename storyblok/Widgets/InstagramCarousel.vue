<template>
    <div
        v-editable="blok"
        class="instagram-carousel"
        :style="{ 
            backgroundColor: blok.bgColour.value 
        }"
    >
        <div class="content-container">
            <p class="heading-size"
                :class="[
                    componentName,
                    blok.fontSize
                ]"
            >
                {{ blok.heading }}
            </p>

            <p
                class="subheading-size"
                :class="[
                    componentName,
                    blok.fontSize
                ]"
            >
                {{ blok.subheading }}
            </p>

            <iframe 
                src="https://widget.tagembed.com/158934?view" 
                style=" width:100%;height:500px;overflow: auto;" 
                frameborder="0" 
                allowtransparency="true">
            </iframe>

            <div class="button-container">
                <nuxt-link 
                    v-if="blok?.linkText?.length"
                    :to="blok.linkUrl.cached_url"
                    class="button"
                >
                    {{ blok.linkText }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({ blok: Object });
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

        @media only screen and (max-width: 600px) {
            flex-direction: column-reverse;
            padding: 1rem;
        }

        .content-container {
            padding: 1rem;
            width: 30%;

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