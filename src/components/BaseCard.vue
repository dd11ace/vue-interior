<script setup>
defineProps(['tag']);
</script>

<template>
  <component class="base-card" :is="tag ? tag : 'div'">
    <slot />
  </component>
</template>

<style lang="scss">
.base-card {
  padding: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 10px;
}
</style>
