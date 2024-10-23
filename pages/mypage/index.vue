<script setup lang="ts">
import type { ColumnDef, ColumnFiltersState, ExpandedState, SortingState, VisibilityState } from '@tanstack/vue-table';
import { valueUpdater } from '@/lib/utils';
import {
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable
} from '@tanstack/vue-table';
import { ArrowUpDown } from 'lucide-vue-next';
import { h, ref, shallowRef } from 'vue';

export interface Report {
  userNameKanji: string;
  birthday: string;
  reportStatus: number;
  reportDate: string;
  planStatus: number;
  planDate: string;
}

const STATUS: { [key: number]: string } = {
  0: '未実行',
  1: '実行予定',
  2: '実行済み',
  3: '実行エラー'
};

const BUTTONS = ['report', 'plan'];

const data = shallowRef<Report[]>([
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 0,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  }
]);

const getStatusColor = (amount: number) => {
  switch (amount) {
    case 0:
      return 'bg-[#d4e9d3]';
    case 1:
      return 'bg-[#fff3cb]';
    case 2:
      return 'bg-[#d9e8fc]';
    case 3:
      return 'bg-[#f8cecb]';
  }
};

const columns: ColumnDef<Report>[] = [
  {
    accessorKey: 'userNameKanji',
    size: 15,
    header: ({ column }) => {
      return h(
        'div',
        {
          class: 'flex items-center justify-center text-center cursor-pointer border-r-2 border-white px-4 ',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
        },
        ['利用者', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]
      );
    },
    cell: ({ row }) => h('div', { class: 'capitalize text-center' }, row.getValue('userNameKanji'))
  },
  {
    accessorKey: 'birthday',
    size: 15,
    header: () => h('div', { class: 'text-center border-r-2 border-white px-4 ' }, '生年月日'),
    cell: ({ row }) => h('div', { class: 'lowercase text-center' }, row.getValue('birthday'))
  },
  {
    accessorKey: 'reportStatus',
    size: 10,
    header: () => h('div', { class: 'text-center border-r-2 border-white px-4 ' }, '報告書'),
    cell: ({ row }) => {
      const amount = parseInt(row.getValue('reportStatus'));

      const label = STATUS[amount];

      const style = 'text-center px-4 py-2 rounded-sm' + ' ' + getStatusColor(amount);

      return h('div', { class: style }, label);
    }
  },
  {
    accessorKey: 'reportDate',
    size: 15,
    header: () => h('div', { class: 'text-center border-r-2 border-white px-4 ' }, '実行日時'),
    cell: ({ row }) => h('div', { class: 'lowercase text-center' }, row.getValue('reportDate'))
  },
  {
    accessorKey: 'planStatus',
    size: 10,
    header: () => h('div', { class: 'text-center border-r-2 border-white px-4 ' }, '計画書'),
    cell: ({ row }) => {
      const amount = parseInt(row.getValue('planStatus'));

      const label = STATUS[amount];

      const style = 'text-center px-4 py-2 rounded-sm' + ' ' + getStatusColor(amount);

      return h('div', { class: style }, label);
    }
  },
  {
    accessorKey: 'planDate',
    size: 15,
    header: () => h('div', { class: 'text-center border-r-2 border-white px-4 ' }, '実行日時'),
    cell: ({ row }) => h('div', { class: 'lowercase text-center' }, row.getValue('planDate'))
  },
  {
    id: 'actionReport',
    header: () => h('div', { class: 'text-center border-r-2 border-white px-4 ' }, '報告書'),
    size: 10,
    cell: ({ row }) => {
      const style = 'text-center px-4 py-2 rounded-sm' + ' ' + getStatusColor(1);
      return h('div', { class: style }, '実行');
    }
  },
  {
    id: 'actionPlan',
    header: () => h('div', { class: 'text-center px-4 ' }, '計画書'),
    size: 10,
    cell: ({ row }) => {
      const style = 'text-center px-4 py-2 rounded-sm' + ' ' + getStatusColor(2);
      return h('div', { class: style }, '実行');
    }
  }
];

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});
const expanded = ref<ExpandedState>({});

const table = useVueTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
  onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expanded),
  state: {
    pagination: {
      pageIndex: 0,
      pageSize: 1000
    },
    get sorting() {
      return sorting.value;
    },
    get columnFilters() {
      return columnFilters.value;
    },
    get columnVisibility() {
      return columnVisibility.value;
    },
    get rowSelection() {
      return rowSelection.value;
    },
    get expanded() {
      return expanded.value;
    }
  }
});
</script>
<template>
  <div class="w-full">
    <div class="table-container overflow-auto">
      <table class="w-full table-fixed">
        <thead class="bg-[#afeeee] sticky top-0 z-10">
          <tr
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <th
              v-for="header in headerGroup.headers"
              :key="header.id"
              class="py-2"
              :style="{ width: header.column.columnDef.size + '%' }"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-if="table.getRowModel().rows?.length">
            <tr
              v-for="row in table.getRowModel().rows"
              :key="row.id"
              class="bg-white dark:bg-gray-800"
            >
              <td
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
                class="px-1 py-1"
              >
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </td>
            </tr>
          </template>
          <tr v-else>
            <td
              :colspan="columns.length"
              class="h-24 text-center"
            >
              No results.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table-container {
  max-height: calc(100vh - 200px); /* Adjust based on your page layout */
  overflow-y: auto;
}

thead th {
  position: sticky;
  top: 0;
  background-color: #afeeee;
  z-index: 1;
}
</style>
