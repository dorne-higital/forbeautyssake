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
        </div>

        <div class="iframe-container">
            <div class="v-html">{{ blok.iframe }}</div>
        </div>
    </div>
</template>

<script setup>
    defineProps({ blok: Object });
</script>



<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .booking-form {
        align-items: center;
        background-color: aqua;
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: center;

        @media (max-width: 600px) {
            flex: auto;
        }

        .content-container {
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
        }

        .iframe-container {
            background-color: aqua;
        }
    }
</style>