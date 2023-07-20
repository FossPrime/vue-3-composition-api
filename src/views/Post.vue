<template>
  <div v-if="post">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import {useRoute} from 'vue-router'
import {ref, watchEffect} from 'vue'
import useResource from '../composables/useResource.js'
const route = useRoute()

//Post
const {fetchOne: fetchPost} = useResource('posts')
const post = ref(await fetchPost(route.params.id))

// User
const {fetchOne: fetchUser} = useResource('users');
const user = ref({})
watchEffect(async () => {
    user.value = await fetchUser(post.value.userId)
})
</script>
