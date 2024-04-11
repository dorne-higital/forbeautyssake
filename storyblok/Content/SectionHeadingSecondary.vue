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
                'align-items': blok.align 
            }"
        >
            <p 
                v-if="blok?.label?.length"
                class="description-header"
            >
                {{ blok.label }}
            </p>

            <h2
                v-if="blok?.heading?.length"
                class="heading"
            >
                {{ blok.heading }}
            </h2>

            <h5
                v-if="blok?.subheading?.length"
                class="subheading"
            >
                {{ blok.subheading }}
            </h5>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'sectionHeadingSecondary',
        props: {
            componentName: {
                type: String,
                default: 'section-heading-secondary'
            },
            blok: {
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .section-heading-secondary {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 3rem 2rem;
        width: calc(100% - 4rem);

        @media (max-width: 600px) {
            padding: 1rem;
            width: calc(100% - 2rem);
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
            align-items: center;
            display: flex;
            flex-direction: column;
            padding: 1rem 2rem;
            width: 100%;

            @media (max-width: 600px) {
                padding: 1rem 0;
            }
        }
    }
</style>