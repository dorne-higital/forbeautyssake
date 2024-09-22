<template>
    <section class="hero-container">
        <div class="hero-banner">
            <div class="hero-content">
                <p class="description-header">Beauty redefined</p>

                <h1>
                    Brow perfection awaits, Your transformation begins now
                </h1>

                <nuxt-link 
                    to="/booking"
                    class="button"
                >
                    Book Now
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'heroMain',
    }
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

// Ensure the section takes up the full viewport height
.hero-container {
    box-sizing: border-box;
    position: relative;
    // width: 100%;
    height: 40rem;
    margin: 0 1rem 1rem;
    overflow: hidden;
}

// Hero banner with background image covering the entire screen
.hero-banner {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('~/assets/images/test.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    // Create the white gradient overlay using ::before
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to left, rgba(255, 255, 255, 0.6), rgb(254 252 251));
        z-index: 1; // Make sure the gradient is above the background image
    }

    // Hero content sits on top of the image and gradient
    .hero-content {
        position: relative;
        z-index: 2; // Ensure content is above the gradient overlay
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        text-align: left;
        padding: 2rem 5rem;
        color: $primary-color;
        width: 50%;

        // Optional styling for mobile responsiveness
        @media (max-width: 768px) {
            padding: 1rem;
        }

        .description-header {
            font-size: 1.5rem;
            color: $color-2;
            font-weight: 500;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .button {
            background-color: $color-2;
            border: 2px solid $color-2;
            color: $secondary-color;
            cursor: pointer;
            font-size: 1rem;
            margin: 1rem 0;
            padding: 0.75rem 2.25rem;
            transition: all 0.3s ease;

            &:hover {
                background-color: transparent;
                color: $primary-color;
                border: 2px solid $primary-color;
            }
        }
    }
}
</style>
