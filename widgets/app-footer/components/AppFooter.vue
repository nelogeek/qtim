<script setup lang="ts">
import AppFooterMapLink from './internal/AppFooterMapLink.vue';
import AppFooterMenuLink from './internal/AppFooterMenuLink.vue';
</script>

<template>
  <div class="bg-[#E2BEFF] px-[7rem] relative flex flex-col min-h-screen overflow-hidden">
    <div class="flex flex-row mt-[8.75rem] gap-[23rem] flex-grow">
      <div class="flex flex-col gap-14">
        <span>Is there a project?</span>

        <h1 class="text-[7rem] leading-100">Let's work <br /> together</h1>
      </div>

      <div class="flex flex-col gap-9 mt-[4.69rem]">
        <div class="flex flex-col gap-3">
          <p class="">For all questions</p>

          <div class="gap-1">
            <p class="">+7 (920) 278 00 68</p>

            <a href="mailto:qtim@agency.com" class="hover:underline transition-all">
              qtim@agency.com
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <p class="">Office in Russia</p>

          <div class="flex flex-col gap-2">
            <p class="">139 Ruben Station Lake <br /> Drew, NM 52678</p>

            <AppFooterMapLink to="https://yandex.ru/maps/?text=Тюмень,+ул.+Республики+61">
              <i-arrow />
            </AppFooterMapLink>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <p class="">Office in Dubai</p>

          <div class="flex flex-col gap-2">
            <p class="">139 Ruben Station Lake <br /> Drew, NM 52678</p>

            <AppFooterMapLink to="https://yandex.ru/maps/?text=Тюмень,+ул.+Республики+61">
              <i-arrow />
            </AppFooterMapLink>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-row justify-between items-end mb-[1.87rem] mt-[17rem]">
      <div class="flex gap-8">
        <AppFooterMenuLink to="https://facebook.com" label="Facebook" />

        <AppFooterMenuLink to="https://www.instagram.com/" label="Instagram" />

        <AppFooterMenuLink to="https://web.telegram.org/a/" label="Telegram" />
      </div>

      <div
        class="bg-black w-[22.375rem] h-[22.375rem] rounded-full cursor-pointer flex justify-center items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <button type="button" class="text-[#F3F3F3] text-[2rem] mb-20">
          Go
        </button>
      </div>

      <div class="flex gap-8">
        <AppFooterMenuLink to="https://www.behance.net/" label="Behance" />

        <AppFooterMenuLink to="https://www.linkedin.com/" label="Linkedn" />

        <AppFooterMenuLink to="/policy" label="Privacy Policy" />
      </div>
    </div>
  </div>
</template>