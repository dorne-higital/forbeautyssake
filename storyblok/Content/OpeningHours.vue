<template>
    <section
        v-editable="blok"
        class="opening-hours"
    >
		<ul>
			<li>
				<span>
                    <strong>{{ blok.Day }}</strong>: 
                </span>
                
                <span>
                    <template v-if="!blok.OpeningTime.length && !blok.ClosingTime.length">
                        Closed
                    </template>

                    <template v-else>
                        {{ blok.OpeningTime }} - {{ blok.ClosingTime }}
                    </template>
                </span>
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
        width: 100%;

        li {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: .2rem 0;
        }
    }
</style>