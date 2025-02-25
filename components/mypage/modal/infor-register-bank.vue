<script setup lang="ts">
import { useToast } from '~/components/ui/toast/use-toast';
import { LoaderCircle } from 'lucide-vue-next';

const props = defineProps<{ isOpen: boolean }>();

const isOpenDialog = ref(props.isOpen);

const { toast } = useToast();
const companyStore = useCompanyStore();

watch(
  () => props.isOpen,
  (newVal) => {
    isOpenDialog.value = newVal;
  }
);

const emit = defineEmits<{ (e: 'close'): void }>();

const handleClose = () => {
  emit('close');
};

const isLoading = ref(false);

const downloadFile = async (file: { type: string; nameFile: string }) => {
  isLoading.value = true;
  const res = await companyStore.downloadFileRegisterBank(file.type);

  const { downloadUrl } = res || {};

  if (!downloadUrl) {
    triggerToast('データのエクスポートに失敗', 'destructive');
    return;
  }

  try {
    const response = await fetch(downloadUrl);

    if (!response.ok) {
      triggerToast('データのエクスポートに失敗', 'destructive');
      return;
    }

    const blob = await response.blob();
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = file.nameFile;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    isLoading.value = false;
  } catch (error) {
    triggerToast('データのエクスポートに失敗', 'destructive');
  }
};

const triggerToast = (message: string, variant: 'default' | 'destructive' | null | undefined) => {
  isLoading.value = false;

  toast({
    description: message,
    variant: variant,
    duration: 1000
  });
};
</script>

<template>
  <AlertDialog v-model:open="isOpenDialog">
    <AlertDialogContent class="w-[800px]">
      <AlertDialogHeader class="flex flex-row justify-between gap-4">
        <AlertDialogTitle class="text-sm font-bold">申し込み用紙ダウンロード</AlertDialogTitle>
        <LoaderCircle
          v-if="isLoading"
          class="w-4 h-4 mr-2 animate-spin"
        />
      </AlertDialogHeader>

      <div class="flex flex-col gap-4 ml-[20px] mt-[20px]">
        <div class="version">
          <span class="title font-bold">◆ 資料</span>
          <div class="content flex flex-col m-[15px] gap-[3px]">
            <span
              class="cursor-pointer text-[#0f17ae] hover:text-[#2631f2] underline"
              @click="downloadFile(FILES_NAME_DOWNLOAD.deposit_account_transfer_request_form_electronic)"
            >
              「預金口座振替依頼書」の電子ファイルによるご提供について
            </span>
            <span
              class="cursor-pointer text-[#0f17ae] hover:text-[#2631f2] underline"
              @click="downloadFile(FILES_NAME_DOWNLOAD.automatic_payment_application_form)"
            >
              「預金口座振替依頼書･自動払込利用申込書」のお取扱い説明書
            </span>
            <span
              class="cursor-pointer text-[#0f17ae] hover:text-[#2631f2] underline"
              @click="downloadFile(FILES_NAME_DOWNLOAD.important_points)"
            >
              ゆうちょ銀行をご利用の場合　特にご留意いただきたい事項
            </span>
            <span
              class="cursor-pointer text-[#0f17ae] hover:text-[#2631f2] underline"
              @click="downloadFile(FILES_NAME_DOWNLOAD.deposit_account_transfer_request_form_excel)"
            >
              「預金口座振替依頼書」Excel形式
            </span>
            <span
              class="cursor-pointer text-[#0f17ae] hover:text-[#2631f2] underline"
              @click="downloadFile(FILES_NAME_DOWNLOAD.deposit_account_transfer_request_form_pdf)"
            >
              「預金口座振替依頼書」PDF形式
            </span>
          </div>
        </div>
        <div class="destination">
          <span class="title font-bold">◆ 送り先</span>
          <div class="content flex flex-col m-[15px] gap-[2px]">
            <span>ファイナリーエージェント株式会社</span>
            <span>神奈川県横浜市港北区樽町4-10-40 ラフィーネ港北Ⅲ201</span>
            <span>045-442-7077</span>
          </div>
        </div>
      </div>
      <AlertDialogFooter class="flex !flex-col gap-4">
        <AlertDialogCancel
          class="flex self-center border border-gray-300 min-w-[120px]"
          :disabled="isLoading"
          @click="handleClose"
          >閉じる</AlertDialogCancel
        >
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
