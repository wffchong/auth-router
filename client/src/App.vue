<script setup lang="ts">
import axios from 'axios'

axios.post('/api/user_router_list', { uid: 2 }).then(res => {
    console.log(res.data)
})
</script>

<template></template>
