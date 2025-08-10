<script setup lang="ts">

</script>

<template>
  <div class="flex flex-row justify-between items-center mx-10 my-9">
    <NuxtLink to="/">
      <i-logo />
    </NuxtLink>

    <div class="flex flex-row gap-[5.69rem] items-center">
      <div class="flex gap-[3.62rem] text-xl">
        <NuxtLink to="/works" class="leading-100">
          Works
        </NuxtLink>

        <NuxtLink to="/about" class="leading-100">
          About
        </NuxtLink>
      </div>

      <div class="flex flex-row gap-4 items-center">
        <button type="button" class="p-[0.625rem] border-[0.125rem] border-[rgba(0,0,0,0.10)] rounded-full w-fit h-fit">
          <i-en-language />
        </button>

        <NuxtLink to="/" class="text-white bg-[#101010] px-8 py-4 text-xl rounded-full">Let’s work</NuxtLink>
      </div>
    </div>
  </div>
</template>