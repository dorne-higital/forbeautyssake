<template>
    <section
        v-editable="blok"
        class="grid-three"
    >
        <div class="content-container">
            <p class="description-header">{{ blok.label }}</p>

            <h1>
                {{ blok.heading }}
            </h1>

            <h4>
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
        componentName: {
            type: String,
            default: 'grid-three'
        },
        props: {
            blok: {
                type: String
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .grid-three {
        background: $bg-tertiary;
        color: $tertiary-color;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 5rem 2rem;
        width: calc(100% - 4rem);

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

        .content-container {
            flex: 1;
            padding: 1rem 2rem;
            width: calc(100% - 4rem);
        }

        .block-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: space-between;
            padding: 1rem;
            width: calc(100% - 4rem);
        }
    }
</style>