<template>
    <section
        v-editable="blok"
        :style="{ 
            backgroundColor: blok.bgColour.value 
        }"
        class="opening-hours"
    >
		<ul>
			<li v-for="(hour, index) in blok.openingHours" :key="index">
				<strong>{{ hour.day }}</strong>: {{ hour.openingTime }} - {{ hour.closingTime }}
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