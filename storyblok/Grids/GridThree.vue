<template>
    <section
        v-editable="blok"
        :class="[
            componentName,
            blok.theme
        ]"
    >
        <div class="content-container">
            <p 
                v-if="blok?.label?.length"
                class="description-header"
            >
                {{ blok.label }}
            </p>

            <h1 v-if="blok?.heading?.length">
                {{ blok.heading }}
            </h1>

            <h4 v-if="blok?.subheading?.length">
                {{ blok.subheading }}
            </h4>
        </div>

        <div class="block-container">
            <StoryblokComponent
                v-for="blok in blok.columns"
                :key="blok._uid"
                :blok="blok"
            />
        </div>
    </section>
</template>

<script>
    export default {
        name: 'gridThree',
        props: {
            componentName: {
                type: String,
                default: 'grid-three'
            },
            blok: {
                type: String
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .grid-three {
        color: $primary-color;
        display: flex;
        flex-direction: column;
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

        &.off-white {
            background: $bg-tertiary;
            color: $tertiary-color;
        }
        
        &.dark {
            background-color: $bg-secondary;
            color: $secondary-color;
        }

        &.color-1 {
            background-color: $color-1;
            color: $primary-color;
        }

        &.color-2 {
            background-color: $color-2;
            color: $secondary-color;
        }

        .content-container {
            flex: 1;
            padding: 1rem 2rem;
            width: 100%;
        }

        .block-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: space-between;
            padding: 1rem;
            width: 100%;

            @media (max-width: 600px) {
                width: 100%;
            }
        }
    }
</style>