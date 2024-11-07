<template>
    <div
        v-editable="blok"
        class="card-treatment"
    >
        <div
            class="card"
            :style="{ 
				backgroundImage:'url(' + blok.image.filename + ')',
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
        },
		data() {
			return {
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
        position: relative;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        flex: 1 1 calc(50% - 1rem);
        margin: 0.5rem;
        display: flex;
        align-items: flex-end;
        color: white;
        overflow: hidden;
        transition: transform 0.3s;
		flex: 1 1 calc(50% - 1rem);

        &:hover .overlay {
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3); // Darker background on hover
        }
    }

    .overlay {
        background-color: rgba(0, 0, 0, 0.2); // Lighter initial background
        width: 100%;
        height: 4rem; // Start with overlay at the bottom 30%
        position: absolute;
        bottom: 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        transition: height 0.3s ease, background-color 0.3s ease;

		@media (max-width: 600px) {
			height: 100%;
		}
    }

    .title {
        margin: 0;
        align-self: flex-end; // Align title to the top of overlay
        transition: opacity 0.3s ease;
    }

    .more-button {
        background-color: transparent;
		border-bottom: 1px solid white;
        color: white;
        cursor: pointer;
        opacity: 0; // Hide initially
        transition: opacity 0.3s ease;

		@media (max-width: 600px) {
			opacity: 1;
		}
    }

    .card:hover .more-button {
        opacity: 1; // Show button on hover
    }
}

</style>