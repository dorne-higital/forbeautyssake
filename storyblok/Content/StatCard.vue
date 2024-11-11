<template>
    <section
        v-editable="blok"
        class="stat-card"
    >
        <div class="content-container">
            <h2 v-if="blok?.stat?.length">
                {{ blok.stat }}
			</h2>

            <p 
				v-if="blok?.label?.length"
				class="stat-label"
			>
                {{ blok.label }}
			</p>
        </div>

    </section>
</template>

<script>
    export default {
        name: 'statCard',
        components: {
        },
        props: {
            componentName: {
                type: String,
                default: 'stat-card'
            },
            blok: {
                type: Object,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .stat-card {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 2rem;
        width: 25%;

        @media (max-width: 600px) {
            flex-direction: column;
            padding: 1rem;
            width: 50%;
        }

		.content-container {
			margin: 0 auto;
			text-align: center;
			width: 80%;
		}
    }
</style>