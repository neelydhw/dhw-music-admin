<template>
  <div>{{ nickname }}</div>
  <q-btn @click="logout">退出</q-btn>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'Index',
  setup() {
    const store = useStore();
    return {
      // 在 computed 函数中访问 state
      nickname: computed(() => store.state.user.nickname),
      logout: () =>
        store.dispatch('user/logout').then(() => {
          window.location.reload();
        }),
    };
  },
};
</script>

<style scoped></style>
