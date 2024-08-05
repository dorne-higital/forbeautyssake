<template>
    <section
        v-editable="blok"
        :class="[
            componentName,
            dynamicClass
        ]"
        :style="{ 
            'flex-direction': blok.align,
            // ...bannerTheme
        }"
    >
        <div 
            class="content-container"
        >
            <h2
                v-if="blok?.heading?.length"
                :class="[
                    blok.headingFontSize
                ]"
                class="subheading"
            >
                {{ blok.heading }}
            </h2>

            <h4
                v-if="blok?.subheading?.length"
                :class="[
                    blok.subheadingFontSize
                ]"
                class="description"
            >
                {{ blok.subheading }}
            </h4>
        </div>

        <div class="button-container">
            <nuxt-link 
                v-if="blok?.linkText?.length"
                :to="blok.linkUrl.cached_url"
                class="button"
                :class="[
                    blok.buttonStyle
                ]"
            >
                {{ blok.linkText }}
            </nuxt-link>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'callToActionBanner',
        props: {
            componentName: {
                type: String,
                default: 'cta-banner'
            },
            blok: {
                type: [Object, String]
            },
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
                const color = this.blok.bannerTheme.value;
                return this.colorClassMapping[color] || '';
            },
            // bannerTheme() {
            //     return {
            //         backgroundColor: this.blok.bannerTheme.value,
            //         borderColor: this.blok.bannerTheme.value
            //     };
            // },
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .cta-banner {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 2rem;
        justify-content: space-between;
        padding: 5rem;
        width: 100%;

        @media (max-width: 600px) {
            flex-direction: column !important;
            padding: 4rem 1rem 4rem;
        }

        //////////////////
        // Theme styles //
        //////////////////

        &.color-1 {
            background-color: $color-1;
            color: $primary-color;

            .button-container {
                .link {
                    border-bottom: 2px solid;
                    cursor: pointer;
                    padding: .5rem 0;
                    width: fit-content;

                    &:hover {
                    }
                }

                .block {
                    background-color: $color-1;
                    cursor: pointer;
                    outline: 2px solid transparent;
                    padding: .5rem 1rem;
                    width: fit-content;

                    &:hover {
                        color: $primary-color;
                        outline: 2px solid $color-1;
                    }
                }

                .outline {
                    border: 2px solid $color-1;
                    cursor: pointer;
                    padding: .5rem 1rem;
                    width: fit-content;

                    &:hover {
                    }
                }

                .rounded {
                    background-color: $color-1;
                    border-radius: 100px;
                    cursor: pointer;
                    outline: 2px solid transparent;
                    padding: .5rem 1rem;
                    width: fit-content;

                    &:hover {
                        color: $primary-color;
                        outline: 2px solid $color-1;
                    }
                }

                .rounded-outline {
                    border: 2px solid $color-1;
                    border-radius: 100px;
                    cursor: pointer;
                    padding: .5rem 1rem;
                    width: fit-content;

                    &:hover {
                        color: $primary-color;
                    }
                }
            }
        }

        &.color-2 {
            background-color: $color-2;
            color: $primary-color;

            .button-container {
                .button {
                    background: $bg-primary;
                    border: 2px solid $bg-primary;
                    box-shadow: .5rem .5rem 0 0 $bg-secondary;
                    color: $primary-color;

                    &:hover {
                        border: 2px solid $color-1;
                        box-shadow: .5rem .5rem 0 0 $color-1;
                    }
                }
            }
        }

        .content-container {
            width: 70%;
        }

        .button-container {
            .button {
                background: $color-1;
                border: 2px solid $color-1;
                box-shadow: .5rem .5rem 0 0 $color-2;
                color: $primary-color;
                cursor: pointer;
                font-size: 1.2rem;
                font-weight: 400;
                padding: .7rem 2rem;
                transition: .5s;

                &:hover {
                    background: $bg-primary;
                    box-shadow: .5rem .5rem 0 0 $color-1;
                    transition: .5s;
                }
            }
        }
    }
</style>