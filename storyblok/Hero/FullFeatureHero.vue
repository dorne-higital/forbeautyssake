<template>
	<section 
        v-editable="blok"
        :style="{ 
           backgroundImage:'url(' + blok.image.filename + ')' 
        }"
        class="hero-container"
    >
		<div class="hero-banner">
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
        name: 'heroMain',
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
	}

	.hero-banner {
		background-image: url('~/assets/images/test.jpg');
		background-size: cover;
		background-position: center;
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

			@media (max-width: 768px) {
				padding: 1rem;
			}

			.description-header {
				color: $color-2;
				font-size: 1.5rem;
				font-weight: 500;
			}

			h1 {
				font-size: 3rem;
				margin-bottom: 1rem;
			}

			.button {
				background-color: $color-2;
				border: 2px solid $color-2;
				color: $secondary-color;
				cursor: pointer;
				font-size: 1rem;
				margin: 1rem 0;
				padding: 0.75rem 2.25rem;
				transition: all 0.3s ease;

				&:hover {
					background-color: transparent;
					border: 2px solid $primary-color;
					color: $primary-color;
				}
			}
		}
	}
</style>
