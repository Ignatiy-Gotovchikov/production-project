export interface LoginSchema {
	username: string;
	password: string;
	isLoading: boolean;
	// rememberMe: can be added;
	error?: string
}