<template>
    <section
        v-editable="blok"
        :style="{ 
            backgroundColor: blok.bgColour.value 
        }"
        class="card-grid"
    >
        <div 
            v-if="blok?.label?.length || blok?.heading?.length || blok?.subheading?.length"
            :style="{ 
                'text-align': blok.align 
            }"
            class="content-container"
        >
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
                v-for="card in blok.cards"
                :key="card._uid"
                :blok="card"
                :size="blok.cardSize"
            />
        </div>
    </section>
</template>

<script>
    export default {
        name: 'cardGrid',
        componentName: {
            type: String,
            default: 'card-grid'
        },
        props: {
            blok: {
                type: Object
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .card-grid {
		align-items: center;
        background: $bg-tertiary;
        color: $tertiary-color;
        display: flex;
        flex-direction: column;
        padding: 5rem;
        width: 100%;

        @media (max-width: 600px) {
            padding: 2rem 1rem;
            width: 100%;
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

        .content-container {
            flex: 1;
            padding: 1rem 2rem;
            max-width: $sw;
        }

        .block-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 1rem;
			width: 100%;
            max-width: $sw;

            @media (max-width: 600px) {
                padding: 0;
                width: 100%;
            }
        }
    }
</style>