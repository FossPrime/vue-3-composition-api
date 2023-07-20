<template>
  <nav class="p-5 bg-green-400 text-white mb-10">
    <router-link :to="{ name: 'Home' }">Snazzy Fake Blog</router-link>
  </nav>
  <div class="container">
    <router-view v-slot="{ Component, route }">
      <template v-if="Component"><!-- Lazy loading support -->
      <Transition mode="out-in" :key="route.path">
      <KeepAlive>
      <Suspense>
        <template #default>
          <component :is="Component" :key="route.path"/>
        </template>
        <template #fallback><div>Loading...</div></template>
      </Suspense>
      </KeepAlive>
      </Transition>
      </template>
    </router-view>
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="css">
.container {
  max-width: 960px;
  margin: 0 auto;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
