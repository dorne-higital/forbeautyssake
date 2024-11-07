<template>
    <div
        v-editable="blok"
        class="card-treatment"
    >
        <div
            class="card"
            :style="{ 
				backgroundImage:'url(' + blok.image.filename + ')' 
			}"
            @click="blok.linkUrl"
        >
            <div class="overlay">
                <h3 class="title">{{ blok.cardTitle }}</h3>
                
                <button v-if="isHovered" class="more-button" @click.stop="blok.linkUrl">
                    {{ blok.linkText }}
                </button>
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
            }
        },
		data() {
			return {
				isHovered: false,
			}
		}
    }
</script>



<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .card-treatment {
        background: $color-1;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 50%;

        @media (max-width: 600px) {
            flex: auto;
        }

        .img-container {
            max-height: 15rem;
            width: 50%;

            @media (max-width: 600px) {
                max-height: 10rem;
            }

            img {
                height: 100%;
                object-fit: cover;
                width: 100%;
            }
        }

        .card-content {
            padding: 1rem;
            width: 50%;

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

                @media (max-width: 600px) {
                    border-bottom: 1px solid #175c53;
                }

                &:hover {
                    border-bottom: 1px solid #175c53;
                    color: $primary-color;
                }
            }
        }
    }
</style>