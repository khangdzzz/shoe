<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { ChevronRight } from 'lucide-vue-next';

const route = useRoute();
const { redirectPage } = useRedirectPage();

const breadcrumbItems = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean);

  let lastPage = pathSegments[pathSegments.length - 1];

  if (!isNaN(Number(lastPage))) lastPage = pathSegments[pathSegments.length - 2];

  return BREADCRUMBS[lastPage] || [];
});
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem
        v-for="(item, index) in breadcrumbItems"
        :key="index"
        class="sm:gap-2.5"
      >
        <BreadcrumbLink
          v-if="!item.isLast"
          @click="redirectPage(item.href)"
          class="cursor-pointer"
        >
          {{ item.label }}
        </BreadcrumbLink>
        <BreadcrumbPage v-else>
          {{ item.label }}
        </BreadcrumbPage>

        <ChevronRight
          class="w-[16px]"
          v-if="!item.isLast"
        />
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
