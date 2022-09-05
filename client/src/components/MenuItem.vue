<template>
    <div>
        <ul v-if="item.children && item.children.length > 0">
            <li>
                <router-link :to="item.link || item.path">{{ item.title }}</router-link>
                <template v-for="(child, index) of item.children" :key="index">
                    <MenuItem :item="child" />
                </template>
            </li>
        </ul>
        <ul v-else>
            <li>
                <router-link :to="item.link || item.path">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})
console.log(props.item)
</script>

<style lang="scss" scoped></style>
