<template>
    <div
        v-editable="blok"
        class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center"
    >
        <div class="content-container">
            <h1>
                {{ blok.heading }}
            </h1>

            <h4>
                {{ blok.subheading }}
            </h4>
        </div>

        <StoryblokComponent
        v-for="blok in blok.columns"
        :key="blok._uid"
        :blok="blok"
        />
    </div>
</template>

<script>
    export default {
        name: 'gridThree',
        components: {
            
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

    .feature-blocks {
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
            width: 50%;
        }

        .block-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 1rem;
            width: calc(100% - 4rem);

            .card {
                display: flex;
                flex-direction: column;
                width: 32%;

                .img-container {
                    max-height: 15rem;
                    max-width: 100%;

                    img {
                        box-shadow: .75rem -.75rem 0 0 $color-1;
                        height: 100%;
                        object-fit: cover;
                        width: 100%;
                    }
                }

                .card-content {
                    padding: 1rem;

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

                    .button {
                        cursor: pointer;
                        font-weight: 300;
                        margin: .5rem 0;
                        padding: .75rem 0;
                        width: fit-content;

                        &:hover {
                            border-bottom: 1px solid #175c53;
                            color: $primary-color;
                        }
                    }
                }
            }
        }
    }
</style>