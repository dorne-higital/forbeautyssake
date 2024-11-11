<template>
    <div
        v-editable="blok"
        class="card-treatment"
    >
        <div
            class="card"
            :style="{ 
                backgroundImage:'url(' + blok.image.filename + ')',
                aspectRatio: computedAspectRatio
            }"
            @click="navigateToLink"
        >
            <div class="overlay">
                <h3 class="title">{{ blok.cardTitle }}</h3>

                <nuxt-link 
                    v-if="blok?.linkText?.length"
                    :to="blok.linkUrl.cached_url"
                    class="more-button" 
                >
                    {{ blok.linkText }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cardTreatment',
        componentName: {
            type: String,
            default: 'card-treatment'
        },
        props: {
            blok: {
                type: Object
            },
            size: {
                type: [Object, String]
            }
        },
        data() {
            return {
            }
        },
        computed: {
            computedAspectRatio() {
                return this.size === "square" ? "1 / 1" : "2 / 1";
            }
        },
        methods: {
            navigateToLink() {
                this.$router.push(this.blok.linkUrl.cached_url);
            },
        },
    }
</script>



<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .card-treatment {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 50%;

        @media (max-width: 600px) {
            width: 100%;
        }

        .card {
            align-items: flex-end;
            background-size: cover;
            background-position: center;
            cursor: pointer;
            flex: 1 1 calc(50% - 1rem);
            color: white;
            display: flex;
            margin: 0.5rem;
            overflow: hidden;
            position: relative;
            transition: transform 0.3s;

            &:hover .overlay {
                height: 100%;
                background-color: rgba(0, 0, 0, 0.3); // Darker background on hover
            }
        }

        .overlay {
            align-items: flex-end;
            background-color: rgba(0, 0, 0, 0.2); 
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 4rem;
            position: absolute;
            padding: 1rem;
            transition: height 0.3s ease, background-color 0.3s ease;
            width: 100%;

            @media (max-width: 600px) {
                height: 100%;
            }
        }

        .title {
            align-self: flex-end;
            margin: 0;
            transition: opacity 0.3s ease;
        }

        .more-button {
            background-color: transparent;
            border-bottom: 1px solid white;
            color: white;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;

            @media (max-width: 600px) {
                opacity: 1;
            }
        }

        .card:hover .more-button {
            opacity: 1;
        }
    }

</style>