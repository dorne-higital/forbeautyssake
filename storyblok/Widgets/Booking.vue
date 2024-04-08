<template>
    <div
        v-editable="blok"
        class="booking-form"
    >
        <div 
            class="content-container"
        >
            <h4>{{ blok.heading }}</h4>

            <h5>{{ blok.subheading }}</h5>

            <p>{{ blok.description }}</p>

            <span>{{ blok.widget }}</span>
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

        @media (max-width: 600px) {
            flex: auto;
        }

        .img-container {
            max-height: 15rem;
            max-width: 100%;

            @media (max-width: 600px) {
                max-height: 10rem;
            }

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