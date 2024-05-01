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

            <p>It is quick and easy to get yourself booked in:</p>

            <ul>
                <li>Pick your treatment</li>

                <li>Choose your date</li>

                <li>Provide your details</li>

                <li>We will see you there</li>
            </ul>

            <p>{{ blok.description }}</p>

            <br />

            <nuxt-link 
                v-if="blok?.linkText?.length"
                :to="blok.linkUrl.url"
                class="button"
            >
                {{ blok.linkText }}
            </nuxt-link>
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
        display: flex;
        flex-direction: row;
        gap: 5rem;
        justify-content: center;
        padding: 4rem;

        .content-container {
            padding: 1rem;
            width: 30%;

            ul {
                list-style: square;
                list-style-position: inside;
                padding-bottom: 1rem;;

                li {
                    padding: .2rem 0 .2rem .5rem;
                }
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
        }
    }
</style>