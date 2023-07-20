<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import useResource from '../composables/useResource.js'
import PostCard from "../components/PostCard.vue";
const {fetchAll} = useResource('posts')
const posts = await fetchAll()
</script>
