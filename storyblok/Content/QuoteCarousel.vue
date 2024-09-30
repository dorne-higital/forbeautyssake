<template>
    <section
        v-editable="blok"
        class="quote-carousel"
    >
        <div class="content-container">
            <p 
                v-if="blok?.label?.length"
                class="description-header"
            >
                {{ blok.label }}
            </p>

            <h2 v-if="blok?.heading?.length">
                {{ blok.heading }}
            </h2>

            <h4 v-if="blok?.subheading?.length">
                {{ blok.subheading }}
            </h4>
        </div>

		<carousel 
			v-bind="carouselSettings"
			class="quote-container"
		>
			<slide
				v-for="blok in blok.quotes"
				:key="blok._uid"
			>
				<StoryblokComponent
					:blok="blok"
				/>
			</slide>

			<template #addons>
				<Navigation />
				<Pagination />
			</template>
		</carousel>

    </section>
</template>

<script>
	import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

	import 'vue3-carousel/dist/carousel.css'

    export default {
        name: 'quoteCarousel',
        components: {
			Carousel,
			Slide,
			Pagination,
			Navigation,
        },
        props: {
            componentName: {
                type: String,
                default: 'quote-carousel'
            },
            blok: {
                type: Object,
            }
        },
		data: () => ({
			carouselSettings: {
				autoplay:  6000,
				itemsToShow: 1,
				snapAlign: 'center',
				wrapAround: true,
			},

		})
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .quote-carousel {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 5rem 2rem;
		text-align: center;
        width: 100%;

        @media (max-width: 600px) {
            flex-direction: column;
            padding: 2rem 1rem;
            width: 100%;
        }

		.quote-container {
			text-align: center;
			width: 100%;
		}
    }
</style>