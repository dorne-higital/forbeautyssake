<template>
    <section
        v-editable="blok"
        :class="[
            componentName,
            dynamicClass
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
        data() {
            return {
                // Define color mappings in data
                colorClassMapping: {
                    '#F79D84': 'color-1',
                    '#33AE9F': 'color-2',
                    '#DDCEC9': 'color-3',
                    '#FEFCFB': 'color-4',
                    '#FFFFFF': 'color-5',
                }
            };
        },
        computed: {
            dynamicClass() {
                const color = this.blok.theme.value;
                return this.colorClassMapping[color] || '';
            },
        }
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

        &.color-1 {
            background-color: $color-1;
            color: $primary-color;
        }

        &.color-2 {
            background-color: $color-2;
            color: $primary-color;
        }

        &.color-3 {
            background-color: #DDCEC9;
            color: $primary-color;
        }

        &.color-4 {
            background-color: $bg-primary;
            color: $primary-color;
        }

        &.color-5 {
            background-color: #FFFFFF;
            color: $primary-color;
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