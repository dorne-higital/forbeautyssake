<template>
    <section
        v-editable="blok"
        :style="{ 
            backgroundColor: blok.bgColour.value 
        }"
        class="stat-grid"
    >
        <div class="block-container">
            <StoryblokComponent
                v-for="card in blok.stats"
                :key="card._uid"
                :blok="card"
            />
        </div>
    </section>
</template>

<script>
    export default {
        name: 'statGrid',
        componentName: {
            type: String,
            default: 'stat-grid'
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

    .stat-grid {
		align-items: center;
        background: $bg-tertiary;
        color: $tertiary-color;
        display: flex;
        flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
        padding: 2rem;
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

        .block-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
			justify-content: center;
			width: 100%;
            max-width: $sw;

            @media (max-width: 600px) {
                padding: 0;
                width: 100%;
            }
        }
    }
</style>