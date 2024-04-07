<template>
    <section 
        v-editable="blok"
        class="hero-container"
    >
        <div class="hero-banner">
            <div class="hero-content">
                <p class="description-header">
                    {{ blok.label }}
                </p>

                <h1>
                    {{ blok.heading }}
                </h1>

                <nuxt-link 
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
        color: $primary-color;
        display: flex;
        gap: 5rem;
        justify-content: center;
        padding: 0 5rem 5rem;

        @media (max-width: 600px) {
            flex-wrap: wrap;
            gap: 1rem;
            padding: 1rem;
        }

        .hero-content {
            background: linear-gradient(90deg, 
                transparent 40%, 
                rgba(247,157,132,1) 40%, 
                rgba(247,157,132,1) 85%, 
                transparent 85%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5rem 0;
            text-align: left;
            width: 50%;

            @media (max-width: 600px) {
                background: none;
                padding: 7rem 1rem 3rem;
                width: 100%;
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
            width: 50%;

            @media (max-width: 600px) {
                padding: 0 1rem;
            }

            img {
                box-shadow: -.75rem .75rem 0 0 $color-1;
                max-height: 17rem;
                object-fit: cover;
                width: calc(50% - 1rem);

                @media (max-width: 600px) {
                    margin-bottom: 2rem;
                }
            }
        }
    }  
</style>