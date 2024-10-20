<template>
  <Suspense>
    <template #default>
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </template>
    <template #fallback>
      <div class="flex items-center justify-center w-[100%] h-[100vh]">
        <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-primary border-opacity-50"></div>
      </div>
    </template>
  </Suspense>
</template>
<style lang="scss" scoped></style>
