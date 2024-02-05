interface loginSchema {
	username: string;
	password: string;
	isLoading: boolean;
	// rememberMe: can be added;
	error?: string
}
export default loginSchema