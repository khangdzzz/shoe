<script setup lang="ts">
import { ArrowLeftToLine, Menu } from 'lucide-vue-next';

const isOpen = ref(true);

const authStore = useAuthStore();
const route = useRoute();
const dataInitStore = useFetchDataInit();
const { redirectPage } = useRedirectPage();

const currentRoute = computed(() => route.path);
const isAdmin = computed(() => authStore.isAdmin);
const isLoadingInit = computed(() => dataInitStore.isLoadingInit);
const currentPath = ref('');

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const checkWindowWidth = () => {
  isOpen.value = window.innerWidth > 768;
};

const logout = () => {
  localStorage.clear();
  redirectPage('/login');
};

onMounted(() => {
  currentPath.value = currentRoute.value;
  checkWindowWidth();
  window.addEventListener('resize', checkWindowWidth);
});

const isPolicyPage = computed(() => {
  return currentRoute.value === '/policy';
});
</script>

<template>
  <div class="flex h-screen bg-white">
    <aside
      class="transition-all duration-300 overflow-hidden flex flex-col justify-between"
      :class="isOpen ? 'sidebar-open' : 'sidebar-closed'"
    >
      <div>
        <div
          class="logo gap-4 flex items-center py-[10px]"
          :class="isOpen ? 'justify-between px-2' : 'justify-center'"
        >
          <a
            href="/"
            class="logo"
            v-if="isOpen"
          >
            <img
              src="~/assets/images/logo.png"
              class="h-[46px] w-auto"
            />
          </a>
          <div
            @click="toggleSidebar"
            class="cursor-pointer"
          >
            <ArrowLeftToLine v-if="isOpen" />
            <Menu v-else />
          </div>
        </div>

        <div
          class="menu flex flex-col cursor-pointer"
          v-if="!isPolicyPage && !isLoadingInit"
        >
          <nav>
            <div
              v-show="isOpen && !isAdmin"
              class="w-full flex items-center h-[46px] px-2 hover:bg-gray-100 text-base font-bold"
            >
              <NuxtLink
                to="/user-list"
                class="w-full h-full flex items-center"
                >利用者選択</NuxtLink
              >
            </div>
          </nav>
          <span
            class="space"
            v-show="isOpen && !isAdmin"
          ></span>

          <nav>
            <div
              v-show="isOpen && !isAdmin"
              class="w-full flex items-center h-[46px] px-2 hover:bg-gray-100 text-base font-bold"
            >
              <NuxtLink
                to="/mypage"
                class="w-full h-full flex items-center"
                >マイページ</NuxtLink
              >
            </div>
          </nav>

          <nav>
            <div
              v-show="isOpen && isAdmin"
              class="w-full flex items-center h-[46px] px-2 hover:bg-gray-100 text-base font-bold"
            >
              <NuxtLink
                to="/customer"
                class="w-full h-full flex items-center"
                >顧客管理</NuxtLink
              >
            </div>
          </nav>
        </div>
      </div>

      <div
        class="logout flex items-center justify-center px-2 py-10 cursor-pointer"
        v-show="isOpen && !isPolicyPage"
      >
        <Button
          variant="cancel_btn"
          type="button"
          @click="logout"
          >ログアウト</Button
        >
      </div>
    </aside>

    <main class="flex-1 h-[100vh] overflow-hidden">
      <div class="flex flex-col h-full">
        <div
          v-if="currentRoute !== '/'"
          class="breadcrumb min-h-[50px] flex items-center"
        >
          <ShareBreadcrumb />
        </div>
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
aside {
  transition:
    width 0.6s ease,
    padding 0.6s ease;

  border-right: 1px solid #e2e2e2;
}

.sidebar-open {
  width: 220px;
  padding: 0 0.5rem;
}

.sidebar-closed {
  width: 40px;
  padding: 0;
}

.menu {
  > .space {
    height: 1px;
    border-bottom: 1px solid #e2e2e2;
  }
}

.breadcrumb {
  border-bottom: 1px solid #e2e2e2;
  padding: 0 20px;
}
</style>
