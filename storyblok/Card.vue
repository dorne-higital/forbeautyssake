<template>
    <div
        v-editable="blok"
        class="card"
    >
        <div class="img-container">
            <img 
                :src="blok.image.filename" 
                :alt="blok.image.alt"
            >
        </div>

        <div 
            class="card-content"
        >
            <h4>{{ blok.heading }}</h4>

            <h5>{{ blok.subheading }}</h5>

            <p>{{ blok.description }}</p>

            <nuxt-link 
                :to="blok.linkUrl.url"
                class="button"
            >
                {{ blok.linkText }} >
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
    defineProps({ blok: Object });
</script>



<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .card {
        display: flex;
        flex: 1;
        flex-direction: column;

        .img-container {
            max-height: 15rem;
            max-width: 100%;

            img {
                box-shadow: .75rem -.75rem 0 0 $color-1;
                height: 100%;
                object-fit: cover;
                width: 100%;
            }
        }

        .card-content {
            padding: 1rem;

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

                &:hover {
                    border-bottom: 1px solid #175c53;
                    color: $primary-color;
                }
            }
        }
    }
</style>