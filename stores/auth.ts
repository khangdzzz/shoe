
export const useAuthStore = defineStore('auth', () => {
    const verifyEmail = async (email: string) => {
        return await apis.archaic?.post('auth/send-verify-email', { email })
    }

    return {
        verifyEmail
    }
})
