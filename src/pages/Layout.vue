<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>胖丁音乐</q-toolbar-title>
        <q-space />
        <q-avatar color="teal" text-color="white">
          {{ nicknameFirstWord }}
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <q-list padding class="rounded-borders text-primary">
        <q-item
          v-for="item in menuRoutes"
          :key="item.title"
          v-ripple
          clickable
          active-class="menu-active text-white"
          :active="item.name === route.name"
          :to="item.path"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section>{{ item.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  name: 'Layout',
  setup() {
    const leftDrawerOpen = ref(false);
    const store = useStore();
    const menuRoutes = [
      {
        path: 'dashboard',
        name: 'Dashboard',
        title: '控制台',
        icon: 'dashboard',
      },
      {
        path: 'user',
        name: 'User',
        title: '用户管理',
        icon: 'manage_accounts',
      },
    ];
    const route = useRoute();
    return {
      nicknameFirstWord: computed(
        () => store.getters['user/nicknameFirstWord'],
      ),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      menuRoutes,
      route,
    };
  },
};
</script>

<style lang="sass">
.menu-active
  color: white !important
  background: #F2C037
</style>
