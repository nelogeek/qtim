<script setup lang="ts">
const props = defineProps<{
  id: string;
  title?: string;
  image?: {
    url: string;
    title?: string;
  };
  url: string;
  preview: string;
  description?: string;
}>();


</script>

<template>
  <div
    class="group flex flex-col select-none gap-4 will-change-transform transition-transform duration-300 hover:-translate-y-5"
  >
    <div class="overflow-hidden">
      <img
        :src=" props?.image?.url"
        :alt="props.image?.title || ''"
        class="object-cover w-full aspect-square transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div>
      <h2 class="text-xl leading-120 line-clamp-3">
        {{ props.preview }}
      </h2>


      <NuxtLink
        :to="props.url"
        class="inline-block mt-3 text-xl text-[#E2BEFF] leading-120 opacity-0 translate-y-2 transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
      >
        Read more
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

</style>
