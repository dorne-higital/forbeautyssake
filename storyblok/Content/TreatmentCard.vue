<template>
    <div
        v-editable="blok"
        class="treatment-card"
    >
        <div 
            class="card-content"
        >
            <h4 v-if="blok?.heading?.length">{{ blok.heading }}</h4>

            <h5 v-if="blok?.subheading?.length">{{ blok.subheading }}</h5>

            <p v-if="blok?.description?.length">{{ blok.description }}</p>

            <nuxt-link 
                v-if="blok?.linkText?.length"
                :to="blok.linkUrl.cached_url"
                class="button"
            >
                {{ blok.linkText }} >
            </nuxt-link>
        </div>

        <div class="img-container">
            <img 
                :src="blok.image.filename" 
                :alt="blok.image.alt"
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: 'treatmentCard',
        componentName: {
            type: String,
            default: 'treatment-card'
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

    .treatment-card {
        background: $color-1;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 50%;

        &:nth-child(3),
        &:nth-child(4) {
            background: $color-2;
        }

        &:nth-child(n+3) {
            flex-direction: row-reverse;
        }

        &:nth-child(n+5) {
            flex-direction: row;
        }

        @media (max-width: 600px) {
            flex: auto;
        }

        .img-container {
            max-height: 15rem;
            width: 50%;

            @media (max-width: 600px) {
                max-height: 10rem;
            }

            img {
                height: 100%;
                object-fit: cover;
                width: 100%;
            }
        }

        .card-content {
            padding: 1rem;
            width: 50%;

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

            .button {
                cursor: pointer;
                font-weight: 300;
                margin: .5rem 0;
                padding: .75rem 0;
                width: fit-content;

                @media (max-width: 600px) {
                    border-bottom: 1px solid #175c53;
                }

                &:hover {
                    border-bottom: 1px solid #175c53;
                    color: $primary-color;
                }
            }
        }
    }
</style>