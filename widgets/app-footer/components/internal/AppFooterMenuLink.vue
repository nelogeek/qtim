<script setup lang="ts">
interface IProps {
  to: string;
  label: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="relative inline-block text-[#101010] hover:text-[#4e5257] transition-all"
  >
    <span>{{ props.label }}</span>

    <span
      class="absolute -bottom-1 left-0 h-[0.5px] w-full bg-[#101010]"
    ></span>
  </NuxtLink>
</template>
