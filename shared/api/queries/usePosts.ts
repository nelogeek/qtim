import type { IPostProps } from "#imports";

export function usePosts() {
  const postsPerPage = ref(8);
  const currentPage = ref(1);

  const { data: dataPosts } = useAsyncData<IPostProps[]>(
    "posts",
    async () => {
      const response = await $fetch<IPostProps[]>(
        "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/"
      );

      return response.map((post, index) => ({
        ...post,
        image: {
          url: `https://picsum.photos/800/800?random=${index + 1}`,
          title: post.image?.title ?? `Random image ${index + 1}`
        }
      }));
    }
  );

  const posts = computed(() => dataPosts.value || []);
  const total = computed(() => dataPosts.value?.length || 0);

  const totalPages = computed(() =>
    Math.ceil(total.value / postsPerPage.value)
  );

  const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * postsPerPage.value;
    const end = start + postsPerPage.value;
    return posts.value.slice(start, end);
  });

  function setPage(page: number) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  }

  return {
    posts,
    total,
    currentPage,
    totalPages,
    paginatedPosts,
    setPage
  };
}
