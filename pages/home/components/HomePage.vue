<script setup lang="ts">
import { usePosts } from '~/shared/api/queries/usePosts';
import PostCard from '~/shared/components/PostCard.vue';
import Pagination from '~/shared/ui-kit/pagination/Pagination.vue';

const { 
  paginatedPosts,
  totalPages,
  currentPage,
  setPage,
} = usePosts();
</script>

<template>
  <div v-if="paginatedPosts" class="mx-[7rem] mt-[7.5rem] mb-[3.12rem]">
    <h1 class="text-[5.25rem] leading-100 mb-[3.69rem]">Posts</h1>

    <div class="grid grid-cols-4 gap-8">
      <PostCard 
        v-for="post in paginatedPosts"
        :id="post.id"
        :key="post.id"
        :url="`/posts/${post.id}`"
        :image="post.image"
        :preview="post.preview"
        :description="post.description"
        :title="post.title"
      />
    </div>

    <Pagination
      :current="currentPage"
      :total="totalPages"
      @update="setPage"
    />
  </div>
</template>
