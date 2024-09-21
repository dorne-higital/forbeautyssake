<template>
    <section
        v-editable="blok"
        class="opening-hours"
    >
		<ul>
			<li>
				<strong>{{ blok.Day }}</strong>: 
                <template v-if="!blok.OpeningTime.length && !blok.ClosingTime.length">
                    Closed
                </template>

                <template v-else>
                    {{ blok.OpeningTime }} - {{ blok.ClosingTime }}
                </template>
			</li>
		</ul>
    </section>
</template>

<script>
    export default {
        name: 'openingHours',
        props: {
            componentName: {
                type: String,
                default: 'opening-hours'
            },
            blok: {
                type: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .opening-hours {

    }
</style>