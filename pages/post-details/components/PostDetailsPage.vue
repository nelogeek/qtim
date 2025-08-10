<script setup lang="ts">

import { usePosts } from '~/shared/api/queries/usePosts'

const route = useRoute()
const postId = computed(() => route.params.id)

const { posts } = usePosts()

const post = computed(() => posts.value.find(p => p.id === postId.value))

</script>

<template>
  <div class="mt-[7.44rem] mb-20 mx-28">
    <div v-if="post" class="flex flex-col">
      <h1 class="text-[5.25rem] leading-100">{{ post.title }}</h1>

      <div class="w-full mt-[4.56rem]">
        <img 
          :src="post.image?.url || 'https://placehold.co/1920x1080'" 
          :alt="post.image?.title || ''" 
          class="w-full aspect-[16/9]"
        />
      </div>

      <div class="flex flex-col gap-8 mt-20">
        <span>About</span>

        <p class="leading-124 text-4xl max-w-[43.4375rem]">{{ post.description }}</p>
      </div>
    </div>

    <div v-else>
      Пост не найден
    </div>
  </div>
</template>
