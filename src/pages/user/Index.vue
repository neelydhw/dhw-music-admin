<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn color="primary" label="添加用户" />
    </div>
    <q-table
      v-model:pagination="pagination"
      :rows="data"
      :columns="columns"
      row-key="name"
      :@request="fetchData"
    />
  </div>
</template>

<script>
import { search } from '../../api/user';
import { ref } from 'vue';

const columns = [
  {
    label: 'ID',
    field: 'id',
  },
  {
    field: 'username',
    label: '用户名',
  },
  {
    field: 'nickname',
    label: '昵称',
  },
];
const rows = [];
const data = ref([]);
const pagination = ref({
  page: 2,
  rowsPerPage: 10,
  rowsNumber: 10,
});

const fetchData = () => {
  search({ page: 0 }).then((res) => {
    console.log(res.data);
    data.value = data.value.concat(res.data.content);
    pagination.value.page = res.data.number + 1;
    pagination.value.rowsPerPage = res.data.size;
    pagination.value.rowsNumber = res.data.totalElements;
  });
};
fetchData();

export default {
  setup() {
    return {
      columns,
      rows,
      data,
      pagination,
    };
  },
};
</script>

<style scoped></style>
