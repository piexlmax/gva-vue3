<template>
  <div>
    <router-view v-if="$route.meta.keepAlive" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <router-view v-if="!$route.meta.keepAlive" v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'Example'
}
</script>
