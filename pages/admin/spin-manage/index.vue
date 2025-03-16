<script setup lang="ts">
import type { ColumnDef, ColumnFiltersState, ExpandedState, SortingState, VisibilityState } from '@tanstack/vue-table';
import { valueUpdater } from '@/utils/index';
import {
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable
} from '@tanstack/vue-table';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-vue-next';
import { h, ref } from 'vue';
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { toast } from '@/components/ui/toast';

definePageMeta({
  layout: false
});

interface Spin {
  id: string;
  amount: string;
  status: 'success' | 'failed' | 'pending';
  name: string;
}

const AMOUNTS = [
  '10.000',
  '20.000',
  '30.000',
  '40.000',
  '50.000',
  '60.000',
  '70.000',
  '80.000',
  '500.000',
  '1.000.000',
  '1.500.000'
];

const data = ref<Spin[]>([]);

const columns: ColumnDef<Spin>[] = [
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'ml-2 font-bold' }, 'Status'),
    cell: ({ row }) => {
      const status = row.getValue('status') as string;

      const statusColor =
        {
          pending: 'text-yellow-500',
          success: 'text-green-500',
          fail: 'text-red-500'
        }[status] || 'text-gray-500';

      return h('div', { class: `capitalize font-medium ${statusColor}` }, status);
    }
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
        },
        () => ['Name', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]
      );
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('name'))
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-center font-bold' }, 'Amount'),
    cell: ({ row }) => {
      const amount = row.getValue('amount');

      const formatted = `${amount} VND`;

      return h('div', { class: 'text-center font-medium' }, formatted);
    }
  },
  {
    accessorKey: 'url',
    header: () => h('div', { class: 'text-center font-bold' }, 'URL'),
    cell: ({ row }) => {
      const status = row.getValue('status');
      const name = row.getValue('name');

      const url = `https://running-store.click?name=${encodeURIComponent(name)}`;

      const copyToClipboard = () => {
        navigator.clipboard.writeText(url).then(() => {
          toast({
            title: 'Bạn đã copy thành công !!!',
            duration: 1000
          });
        });
      };

      return h('div', { class: 'font-medium flex items-start gap-2' }, [
        h('span', url),
        status === 'pending' &&
          h(
            'button',
            {
              class: 'ml-2 text-blue-500 hover:underline',
              onClick: copyToClipboard
            },
            'Copy'
          )
      ]);
    }
  }
];

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});
const expanded = ref<ExpandedState>({});
const isLoading = ref(false);
const fileName = ref('spins');
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
    },
    get pagination() {
      return {
        pageIndex: 0,
        pageSize: 10000
      };
    }
  }
});

const statuses: Spin['status'][] = ['success', 'failed', 'pending'];
function randomize() {
  data.value = data.value.map((item) => ({
    ...item,
    status: statuses[Math.floor(Math.random() * statuses.length)]
  }));
}

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    amount: z.string().min(2).max(50)
  })
);

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema
});

const onSubmit = handleSubmit(async (values) => {
  const body = {
    id: Date.now(),
    name: values.username,
    amount: values.amount,
    status: 'pending'
  };

  await addUser(body, fileName.value);

  toast({
    title: 'Bạn đã đăng kí quay thành công !!!',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))
    ),
    duration: 3000
  });
});

onMounted(async () => {
  await fetchData(fileName.value);
});

const fetchData = async (fileName: string) => {
  try {
    isLoading.value = true;
    const res = await $fetch('/api/file/read', {
      method: 'POST',
      params: { fileName }
    });

    data.value = res;
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    console.error('Lỗi khi gọi API:', error);
  }
};

const addUser = async (body: any, fileName: string) => {
  isLoading.value = true;

  try {
    await $fetch(`/api/file/write`, {
      method: 'POST',
      params: { fileName },
      body
    });

    await fetchData(fileName);
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    console.error('Lỗi khi gọi API:', error);
  }
};
</script>

<template>
  <div class="w-[100%] h-[100vh] overflow-hidden pt-10 md:w-[800px] md:pl-20">
    <h1 class="text-3xl font-bold mb-4 flex items-center font-bold">QUẢN LÝ VÒNG QUAY</h1>
    <form
      class="w-1/3 space-y-2"
      @submit="onSubmit"
    >
      <FormField
        v-slot="{ componentField }"
        name="username"
        :validate-on-blur="!isFieldDirty"
      >
        <FormItem
          v-auto-animate
          class="flex align-center justify-between gap-2 items-center w-[400px]"
        >
          <span class="w-[120px] flex-shrink-0">Tên tài khoản</span>
          <FormControl class="w-[300px]">
            <Input
              type="text"
              v-bind="componentField"
            />
          </FormControl>
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="amount"
        :validate-on-blur="!isFieldDirty"
      >
        <FormItem
          v-auto-animate
          class="flex align-center justify-between gap-2 items-center w-[400px]"
        >
          <span class="w-[120px] flex-shrink-0">Số tiền quay trúng</span>
          <FormControl>
            <Select v-bind="componentField">
              <SelectTrigger>
                <SelectValue placeholder="Số tiền" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  :value="`${amount}`"
                  v-for="amount of AMOUNTS"
                >
                  {{ amount }}
                </SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      </FormField>
      <Button type="submit"> Submit </Button>
    </form>
    <div class="flex gap-2 items-center py-4">
      <Input
        class="max-w-52"
        placeholder="Filter name..."
        :model-value="table.getColumn('name')?.getFilterValue() as string"
        @update:model-value="table.getColumn('name')?.setFilterValue($event)"
      />
      <Button @click="randomize"> Tìm kiếm </Button>
    </div>
    <div class="w-[100%] rounded-md border h-[calc(100vh-300px)] overflow-auto md:w-full">
      <Table>
        <TableHeader>
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead
              v-for="header in headerGroup.headers"
              :key="header.id"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <template
              v-for="row in table.getRowModel().rows"
              :key="row.id"
            >
              <TableRow :data-state="row.getIsSelected() && 'selected'">
                <TableCell
                  v-for="cell in row.getVisibleCells()"
                  :key="cell.id"
                >
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </TableCell>
              </TableRow>
              <TableRow v-if="row.getIsExpanded()">
                <TableCell :colspan="row.getAllCells().length">
                  {{ JSON.stringify(row.original) }}
                </TableCell>
              </TableRow>
            </template>
          </template>

          <TableRow v-else>
            <TableCell
              :colspan="columns.length"
              class="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
  <ShareLoading v-if="isLoading" />
</template>
