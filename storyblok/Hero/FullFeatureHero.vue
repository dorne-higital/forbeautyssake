<template>
	<section 
        v-editable="blok"
        class="hero-container"
    >
		<div 
			:style="{ 
				backgroundImage:'url(' + blok.image.filename + ')' 
			}"
			class="hero-banner"
		>
            <div class="hero-content">
                <p 
                    v-if="blok?.label?.length"
                    class="description-header"
                >
                    {{ blok.label }}
                </p>

                <h1 v-if="blok?.heading?.length">
                    {{ blok.heading }}
                </h1>

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
        </div>
    </section>
</template>

<script>
    export default {
        name: 'fullFeatureHero',
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

	.hero-container {
		box-sizing: border-box;
		height: 40rem;
		margin: 0 1rem 1rem;
		overflow: hidden;
		position: relative;

		@media (max-width: 600px) {
			height: 30rem;
		}
	}

	.hero-banner {
		// background-image: url('~/assets/images/test.jpg');
		background-size: cover;
		background-position:right;
		background-repeat: no-repeat;
		height: 100%;
		position: relative;
		width: 100%;

		&::before {
			background: linear-gradient(to left, rgba(255, 255, 255, 0.6), rgb(254 252 251));
			content: "";
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 1;
		}

		.hero-content {
			align-items: flex-start;
			color: $primary-color;
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: center;
			padding: 2rem 5rem;
			position: relative;
			text-align: left;
			width: 50%;
			z-index: 2; 

			@media (max-width: 600px) {
				padding: 1rem;
				width: 100%;
			}

			.description-header {
				color: $color-2;
				font-weight: 500;
			}

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
</style>
