<template>
    <section
        :class="[
            componentName,
            'theme-' + content.theme,
        ]"
        v-if="isVisible"
    >
        <div class="content-container">
            <p>
                {{ content.description }}
            </p>

            <span 
                class="close" 
                @click="closeBanner"
            >
                x
            </span>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'notificationBanner',
        props: {
            componentName: {
                type: String,
                default: 'notification-banner'
            },
            content: {
                default: () => ({
                    "theme": "dark",
                    "description": "optional desciptive text",
                }),
                type: Object
            },
        },
        data() {
            return {
                isVisible: true
            };
        },
        methods: {
            closeBanner() {
                this.isVisible = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .notification-banner {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 0 1rem;

        //////////////////
        // Theme styles //
        //////////////////

        &.theme-color-1 {
            background-color: $color-1;
            color: $primary-color;
        }

        &.theme-color-2 {
            background-color: $color-2;
            color: $secondary-color;
        }

        .content-container {
            display: flex;
            flex: 1;
            flex-direction: row;
            justify-content: space-between;
            padding: 1rem 2rem;
            width: 50%;

            p {
                font-weight: 300;
                margin-bottom: 0;
            }

            .close {
                border: 1px solid white;
                cursor: pointer;
                padding: 0 .5rem;
                transition: .3sec;

                &:hover {
                    background: $bg-primary;
                    color: $primary-color;
                    transition: .3sec;
                }
            }
        }
    }
</style>