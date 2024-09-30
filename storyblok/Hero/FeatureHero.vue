<template>
    <section 
        v-editable="blok"
        :style="{ 
           // backgroundImage:'url(' + blok.image.filename + ')' 
        }"
        class="hero-container"
    >
        <div class="hero-banner">
            <div class="hero-content">
                <p 
                    v-if="blok?.label?.length"
                    class="description-header"
                >
                    {{ blok.label }}
                </p>

                <h1 
                    v-if="blok?.heading?.length"
                    :class="[
                        blok.headingFontSize
                    ]"
                >
                    {{ blok.heading }}
                </h1>

                <h4 
                    v-if="blok?.subheading?.length"
                    :class="[
                        blok.subheadingFontSize
                    ]"
                >
                    {{ blok.subheading }}
                </h4>

                <nuxt-link 
                    v-if="blok?.linkText?.length"
                    :to="blok.linkUrl.cached_url"
                    class="button"
                    :class="[
                        blok.buttonStyle
                    ]"
                >
                    {{ blok.linkText }}
                </nuxt-link>
            </div>

            <div class="img-container">
                <img 
                    :src="blok.image.filename" 
                    :alt="blok.image.alt"
                >
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'featureHero',
        components: {
            
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

    .hero-container {
        height: 40rem;
        overflow: hidden;

        @media (max-width: 600px) {
            height: 30rem;
        }

    }

    .hero-banner {
        align-items: center;
        background: $color-5;
        color: $primary-color;
        display: flex;
        height: 40rem;
        justify-content: center;
        position: relative;

        @media (max-width: 600px) {
            flex-direction: column-reverse;
            flex-wrap: wrap;
            gap: 1rem;
            height: 30rem;
            padding: 1rem 0;
        }

        .hero-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5rem 0 5rem 5rem;
            text-align: left;
            width: 40%;

            @media (max-width: 600px) {
                background: none;
                padding: 2rem 1rem 3rem;
                width: 100%;
                z-index: 10;
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

            .description-header {
                color: $color-2;
                font-weight: 500;
            }

            .link {
                border-bottom: 2px solid;
                cursor: pointer;
                padding: .5rem 0;
                width: fit-content;

                &:hover {
                }
            }

            .block {
                background-color: $color-1;
                cursor: pointer;
                outline: 2px solid transparent;
                padding: .5rem 1rem;
                width: fit-content;

                &:hover {
                    color: $primary-color;
                    outline: 2px solid $color-1;
                }
            }

            .outline {
                border: 2px solid $color-1;
                cursor: pointer;
                padding: .5rem 1rem;
                width: fit-content;

                &:hover {
                }
            }

            .rounded {
                background-color: $color-1;
                border-radius: 100px;
                cursor: pointer;
                outline: 2px solid transparent;
                padding: .5rem 1rem;
                width: fit-content;

                &:hover {
                    color: $primary-color;
                    outline: 2px solid $color-1;
                }
            }

            .rounded-outline {
                border: 2px solid $color-1;
                border-radius: 100px;
                cursor: pointer;
                padding: .5rem 1rem;
                width: fit-content;

                &:hover {
                    color: $primary-color;
                }
            }
        }

        .img-container {
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            gap: 2rem;
            height: 100%;
            width: 60%;

            @media (max-width: 600px) {
                height: 15rem;
                width: 100%;
            }

            &:after {
                content: '';
                background: linear-gradient(90deg, $color-5 10%, transparent 90%);
                height: 100%;
                position: absolute;
                top: 0;
                width: inherit;

                @media (max-width: 600px) {
                    background: linear-gradient(0, transparent 0%, #FEFCFB 0%,#FEFCFB 50%, transparent 100%);
                    left: 0;
                }
            }

            img {
                object-fit: cover;
                width: 100%;
            }

        }
    }  
</style>