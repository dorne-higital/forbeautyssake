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

                <h1 v-if="blok?.heading?.length">
                    {{ blok.heading }}
                </h1>

                <h4 v-if="blok?.subheading?.length">
                    {{ blok.subheading }}
                </h4>

                <nuxt-link 
                    v-if="blok?.linkText?.length"
                    :to="blok.linkUrl.url"
                    class="button"
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

        <div class="hero-shape"></div>
    </section>
</template>

<script>
    export default {
        name: 'featureHero',
        components: {
            
        },
        props: {
            blok: {
                type: String
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .hero-container {

    }

    .hero-banner {
        align-items: center;
        background: $color-5;
        color: $primary-color;
        display: flex;
        justify-content: center;
        position: relative;

        @media (max-width: 600px) {
            flex-direction: column-reverse;
            flex-wrap: wrap;
            gap: 1rem;
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
                width: calc(100% - 2rem);
            }

            .description-header {
                color: $color-2;
                font-weight: 500;
            }

            .button {
                background-color: $color-2;
                border: 2px solid $color-2;
                color: $secondary-color;
                cursor: pointer;
                font-size: 1rem;
                margin: .5rem 0;
                padding: .75rem 2.25rem;
                width: fit-content;

                &:hover {
                    border: 2px solid #175c53;
                    color: $primary-color;
                }
            }
        }

        .img-container {
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            gap: 2rem;
            width: 60%;

            @media (max-width: 600px) {
                width: 100%;
            }

            &:after {
                content: '';
                background: linear-gradient(90deg, $color-5 20%, transparent 60%);
                height: 100%;
                position: absolute;
                top: 0;
                width: 100%;

                @media (max-width: 600px) {
                    background: linear-gradient(180deg, $color-5 10%, transparent 30%);
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