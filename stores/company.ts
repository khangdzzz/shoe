import type { RegisterNewUser } from "~/models/company"

export const useCompanyStore = defineStore('company', () => {
    const registerNewUser = async (body: RegisterNewUser) => {
        return await apis.archaic?.post('company/register', { ...body })
    }

    return {
        registerNewUser
    }
})
