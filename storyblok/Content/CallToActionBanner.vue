<template>
    <section
        v-editable="blok"
        :class="[
            componentName,
            blok.theme
        ]"
        :style="{ 
            'flex-direction': blok.align 
        }"
    >
        <div 
            class="content-container"
        >
            <h3
                v-if="blok?.subheading?.length"
                class="subheading"
            >
                {{ blok.heading }}
            </h3>

            <p
                v-if="blok?.description?.length"
                class="description"
            >
                {{ blok.subheading }}
            </p>
        </div>

        <div class="button-container">
            <nuxt-link 
                v-if="blok?.linkText?.length"
                :to="blok.linkUrl.url"
                class="button"
            >
                {{ blok.linkText }}
            </nuxt-link>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'callToActionBanner',
        props: {
            componentName: {
                type: String,
                default: 'cta-banner'
            },
            blok: {
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .cta-banner {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 5rem 2rem;
        width: 100%;

        @media (max-width: 600px) {
            
        }

        //////////////////
        // Theme styles //
        //////////////////
        
        &.dark {
            background-color: $bg-secondary;
            color: $secondary-color;

            .content-container .button {
                background-color: $bg-primary;
                border: 2px solid $bg-primary;
                color: $primary-color;

                &:hover {
                    color: $secondary-color;
                }
            }
        }

        &.color-1 {
            background-color: $color-1;
            color: $primary-color;
        }

        &.color-2 {
            background-color: $color-2;
            color: $primary-color;
        }

        .content-container {

        }
    }
</style>