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
            <iframe 
                src="https://bookings.gettimely.com/forbeautyssake/bb/book" 
                scrolling="no" 
                id="timelyWidget" 
                style="width:480px;height:600px;border:none"
            >
            </iframe>
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
        display: flex;
        flex: 1;
        flex-direction: row;
        gap: 5rem;
        justify-content: center;
        padding: 4rem;

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
            border: 2px solid $color-1;
            box-shadow: 1rem 1rem 0 0 $color-1;
        }
    }
</style>