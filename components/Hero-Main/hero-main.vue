<template>
    <section class="hero-container">
        <div class="hero-banner">
            <div class="hero-content">
                <p class="description-header">Beauty redefined</p>

                <h1>
                    Brow perfection awaits, Your transformation begins now
                </h1>

                <!-- <h5 class="sub-heading">
                    Are you ready to build your online presence? Let us know
                    how we can help!
                </h5> -->

                <nuxt-link 
                    to="/booking"
                    class="button"
                >
                    Book Now
                </nuxt-link>
            </div>

            <div class="img-container">
                <img 
                    src="~/assets/images/test.jpg" 
                    alt=""
                >
                
                <img 
                    src="~/assets/images/test.jpg" 
                    alt=""
                >
                
                <img 
                    src="~/assets/images/test.jpg" 
                    alt=""
                    class="last-of-type"
                >
            </div>
        </div>

        <div class="hero-shape"></div>
    </section>
</template>

<script>
    export default {
        name: 'heroMain',
        components: {
            
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .hero-container {
    }

    .hero-banner {
        align-items: center;
        background-color: $bg-primary;
        color: $primary-color;
        display: flex;
        gap: 5rem;
        justify-content: center;
        padding: 5rem;

        .hero-content {
            background: linear-gradient(90deg, 
                transparent 40%, 
                rgba(247,157,132,1) 40%, 
                rgba(247,157,132,1) 85%, 
                transparent 85%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            padding: 5rem 0;
            text-align: left;
            width: 50%;

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

            img {
                box-shadow: -.75rem .75rem 0 0 $color-1;
                max-height: 20rem;
                object-fit: cover;
                width: calc(50% - 1rem);
            }

            .last-of-type {
                width: 100%;
            }
        }
    }
</style>