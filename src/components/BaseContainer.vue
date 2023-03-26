<script setup>
defineProps({
  tag: String,
});
</script>

<template>
  <component class="base-container" :is="tag ? tag : 'div'">
    <slot />
  </component>
</template>

<style lang="scss">
.base-container {
  max-width: 1300px;
  margin: 0 auto;
  padding-left: 70px;
  padding-right: 70px;
}
</style>
