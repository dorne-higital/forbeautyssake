<template>
    <section
        v-editable="blok"
        class="image-galler"
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

		<Carousel 
			id="gallery" 
			:items-to-show="1" 
			:wrap-around="false" 
			v-model="currentSlide"
			class="image-container"
		>
			<slide
				v-for="blok in blok.images"
				:key="blok._uid"
			>
				<StoryblokComponent
					:blok="blok"
				/>
			</slide>
		</carousel>

		<Carousel
			id="thumbnails"
			:items-to-show="4"
			:wrap-around="true"
			v-model="currentSlide"
			ref="carousel"
		>
			<Slide 
				v-for="blok in blok.images" 
				:key="blok._uid"
			>
				<div 
					class="carousel__item" 
					@click="slideTo(blok - 1)"
				>
					{{ blok }}
				</div>
			</Slide>
		</Carousel>

    </section>
</template>

<script>
	import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

	import 'vue3-carousel/dist/carousel.css'

    export default {
        name: 'imageGallery',
        components: {
			Carousel,
			Slide,
			Pagination,
			Navigation,
        },
        props: {
            componentName: {
                type: String,
                default: 'image-gallery'
            },
            blok: {
                type: String,
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

    .image-gallery {
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

		.image-container {
			text-align: center;
			width: 100%;
		}
    }
</style>