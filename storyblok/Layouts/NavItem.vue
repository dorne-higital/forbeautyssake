<template>
    <li
        v-editable="blok"
        class="nav-item"
    >
        <a :href="blok.LinkUrl.url">
            {{ blok.LinkTitle }}
        </a>
    </li>
</template>

<script setup>
    defineProps({ blok: Object });
</script>



<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

</style>