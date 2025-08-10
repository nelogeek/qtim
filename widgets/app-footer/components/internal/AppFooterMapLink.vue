<script setup lang="ts">
interface IProps {
  to: string;
}

const props = defineProps<IProps>();

</script>

<template>
  <NuxtLink
    :to="props.to"
    class="flex justify-center items-center w-8 h-8 bg-[#101010] rounded-full"
  >
    <slot />
  </NuxtLink>
</template>
