<template>
    <div class="my-side-bar">
        <ul>
            <li>
                <router-link to="/">首页</router-link>
            </li>
        </ul>
        <template v-for="(item, index) of store.state.routeTree" :key="index">
            <MenuItem :item="item" />
        </template>
    </div>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { useStore } from 'vuex'

const store = useStore()
</script>

<style>
.my-side-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 250px;
    height: 100%;
    padding: 90px 30px 90px 30px;
    box-sizing: border-box;
    background-color: #ededed;
}
</style>
