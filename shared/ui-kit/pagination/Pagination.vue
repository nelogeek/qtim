<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update', page: number): void;
}>();

const props = withDefaults(defineProps<{
  current?: number;
  total?: number;
}>(), {
  current: 1,
  total: 1,
});

const visibleCount = 5;

const startPage = computed(() => {
  let start = (props.current ?? 1) - Math.floor(visibleCount / 2);
  if (start < 1) start = 1;

  const maxStart = (props.total ?? 1) - visibleCount + 1;
  if (start > maxStart) start = Math.max(maxStart, 1);

  return start;
});

const visiblePages = computed(() => {
  const pages = [];
  const start = startPage.value;
  const total = props.total ?? 1;

  for (let i = 0; i < visibleCount; i++) {
    const page = start + i;
    if (page <= total) pages.push(page);
  }
  return pages;
});

function goToPage(page: number) {
  if (page >= 1 && page <= (props.total ?? 1)) {
    emit('update', page);
  }
}
</script>

<template>
  <div class="flex justify-start mt-10 gap-2">
    <button
      v-if="props.current !== 1"
      type="button"
      class="p-1 border rounded"
      :disabled="props.current === 1"
      @click="goToPage((props.current ?? 1) - 1)"
    >
      <i-prev />
    </button>

    <button
      v-for="page in visiblePages"
      :key="page"
      type="button"
      :class="[
        'px-3 py-1 rounded',
        page === props.current ? 'bg-[#101010] text-white' : 'bg-[#F3F3F3]'
      ]"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <button
      v-if="props.current !== props.total"
      type="button"
      class="p-1 border rounded"
      :disabled="props.current === props.total"
      @click="goToPage((props.current ?? 1) + 1)"
    >
      <i-next />
    </button>
  </div>
</template>
