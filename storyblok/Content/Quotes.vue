<template>
    <section
        v-editable="blok"
        :style="{ 
            backgroundColor: blok.bgColour.value 
        }"
        class="quotes"
    >
        <div class="content-container">
            <h4 v-if="blok?.quote?.length">
                {{ blok.quote }}
			</h4>

            <p v-if="blok?.author?.length">
                {{ blok.author }}
			</p>
        </div>

    </section>
</template>

<script>
    export default {
        name: 'quotes',
        components: {
        },
        props: {
            componentName: {
                type: String,
                default: 'quotes'
            },
            blok: {
                type: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .quotes {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 5rem 2rem;
        width: 100%;

        @media (max-width: 600px) {
            flex-direction: column;
            padding: 2rem 1rem;
            width: 100%;
        }
    }
</style>