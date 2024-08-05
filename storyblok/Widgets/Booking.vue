<template>
    <div
        v-editable="blok"
        class="booking-form"
    >
        <div 
            class="content-container"
        >
            <h4
                v-if="blok?.heading?.length"
                :class="[
                    blok.headingFontSize
                ]"
            >
                {{ blok.heading }}
            </h4>

            <h5
                v-if="blok?.subheading?.length"
                :class="[
                    blok.subheadingFontSize
                ]"
            >
                {{ blok.subheading }}
            </h5>

            <p
                v-if="blok?.description?.length"
            >
                {{ blok.description }}
            </p>

            <br />

            <nuxt-link 
                v-if="blok?.linkText?.length"
                :to="blok.linkUrl.cached_url"
                :style="buttonStyle"
                class="button"
            >
                {{ blok.linkText }}
            </nuxt-link>
        </div>

        <div 
            class="iframe-container"
            :style="iframeStyle"
        >
            <iframe 
                src="https://bookings.gettimely.com/forbeautyssake/bb/book" 
                scrolling="no" 
                id="timelyWidget" 
                style="width:100%;height:600px;border:none"
            >
            </iframe>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    // Define props
    const props = defineProps({
        blok: {
            type: Object,
            required: true
        }
    });

    // Computed iframe style
    const iframeStyle = computed(() => ({
        borderColor: props.blok.iframeTheme.value,
        boxShadow: `1rem 1rem 0 0 ${props.blok.iframeTheme.value}`
    }));
    // Computed button style
    const buttonStyle = computed(() => ({
        borderColor: props.blok.buttonTheme.value,
        boxShadow: `.5rem .5rem 0 0 ${props.blok.buttonTheme.value}`
    }));
</script>



<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .booking-form {
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

            ul {
                list-style: square;
                list-style-position: inside;
                padding-bottom: 1rem;;

                li {
                    padding: .2rem 0 .2rem .5rem;
                }
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

            .button {
                border: 2px solid $color-1;
                box-shadow: .5rem .5rem 0 0 $color-1;
                color: $primary-color;
                cursor: pointer;
                font-size: 1.2rem;
                font-weight: 400;
                padding: .5rem 1.5rem;
                transition: .5s;

                &:hover {
                    background: $color-1;
                    box-shadow: .5rem .5rem 0 0 $color-2;
                    transition: .5s;
                }
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