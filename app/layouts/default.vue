<script setup lang="ts">
import AppHeader from "~/widgets/app-header";
import AppFooter from "~/widgets/app-footer";

</script>

<template>
  <div  class="flex flex-col min-h-screen mx-auto">
    <div class="grow">
      <AppHeader />
      
      <slot />
    </div>

    <AppFooter />
  </div>
</template>