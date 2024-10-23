import { apis } from "~/apis"
import type { MasterData } from "~/models/masterData"

export const useFetchDataInit = defineStore('auth', () => {
    const masterData = ref<MasterData | undefined>(undefined)

    const initData = async () => {
        await Promise.all([getMasterData()])
    }
    const getMasterData = async () => {
        const res = await apis.archaic?.get('master-data')

        masterData.value = res?.data
    }

    return {
        masterData,
        initData,
    }
})
