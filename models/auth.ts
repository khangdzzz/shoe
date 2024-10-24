export interface LoginUser {
	email: string
	password: string
}


export interface UserLoginResponse {
	companyId: number
	email: string
	id: number
	role: number
}

export interface LoginResponse {
	accessToken: string
	refreshToken: string
	user: UserLoginResponse
}

