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
            @click="navigateToLink"
			@mouseenter="isHovered = true"
			@mouseleave="isHovered = false"
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
        // background: $color-1;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 50%;

        @media (max-width: 600px) {
            flex: auto;
        }

		.card {
  position: relative;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  flex: 1 1 calc(50% - 1rem); /* 50% width minus some margin */
  height: 250px;
  margin: 0.5rem;
  display: flex;
  align-items: flex-end;
  color: white;
  overflow: hidden;
  transition: transform 0.3s;
}
.card:hover {
  transform: scale(1.02);
}
.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-size: 1.2rem;
  margin: 0;
}
.more-button {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: none;
}
.card:hover .more-button {
  display: inline-block;
}
    }
</style>