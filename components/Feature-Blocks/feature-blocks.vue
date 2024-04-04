<template>
    <section
        :class="[
            componentName,
            'theme-' + content.theme,
        ]"
    >
        <div class="content-container">
            <p class="description-header">{{ content.label }}</p>

            <h1>
                {{ content.heading }}
            </h1>

            <h4>
                {{ content.subheading }}
            </h4>
        </div>

        <div class="block-container">
            <div 
                v-for="(card, index) in content.cards"
                :key="index"
                class="card"
            >
                <div class="img-container">
                    <img 
                        src="~/assets/images/test.jpg" 
                        alt=""
                    >
                </div>

                <div 
                    :class="[
                        'card-content',
                        'theme-' + card.theme,
                    ]"
                >
                    <h4>{{ card.heading }}</h4>

                    <h5>{{ card.subheading }}</h5>

                    <p>{{ card.description }}</p>

                    <nuxt-link 
                        :to="card.button.url"
                        class="button"
                    >
                        {{ card.button.text }} >
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'featureBlocks',
        props: {
            componentName: {
                type: String,
                default: 'feature-blocks'
            },
            content: {
                default: () => ({
                    "theme": "dark",
                    "label": "section label",
                    "heading": "section heading secondary",
                    "subheading": "optional section description",
                    "cards": [
                        {
                            "theme": null,
                            "img": "",
                            "heading": "Card heading",
                            "subheading": "Subheading",
                            "description": "Pellentesque sagittis accumsan lectus, vel finibus mi tempus sit amet. Nam quis augue a odio fringilla.",
                            "button": {
                                "text": "Read more",
                                "url": "/"
                            }
                        },
                    ]
                }),
                type: Object
            }
        }
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