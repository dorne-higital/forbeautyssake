<template>
    <section
        v-editable="blok"
        :class="[
            componentName,
            blok.theme
        ]"
    >
        <div 
            class="content-container"
            :style="{ 
                'text-align': blok.align 
            }"
        >
            <p 
                v-if="blok?.label?.length"
                class="description-header"
            >
                {{ blok.label }}
            </p>

            <h1
                v-if="blok?.heading?.length"
                class="heading"
            >
                {{ blok.heading }}
            </h1>

            <h4
                v-if="blok?.subheading?.length"
                class="subheading"
            >
                {{ blok.subheading }}
            </h4>

            <p
                v-if="blok?.description?.length"
                class="description"
            >
                {{ blok.description }}
            </p>

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
        name: 'textColOne',
        props: {
            componentName: {
                type: String,
                default: 'text-col-one'
            },
            blok: {
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .text-col-one {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 5rem 2rem;
        width: 100%;

        @media (max-width: 600px) {
            padding: 2rem 1rem;
            width: 100%;
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
            display: flex;
            flex-direction: column;
            padding: 1rem 2rem;
            width: 100%;

            @media (max-width: 600px) {
                padding: 1rem 0;
            }

            .button {
                background-color: $bg-secondary;
                border: 2px solid $bg-secondary;
                color: $secondary-color;
                cursor: pointer;
                margin-top: 1rem;
                padding: .5rem 1.5rem;
                transition: .3s;
                width: fit-content;

                &:hover {
                    background-color: transparent;
                    color: $primary-color;
                    transition: .3s;
                }
            }
        }
    }
</style>