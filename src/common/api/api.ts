import { toast } from 'react-toastify';
import { baseInstance, authInstance } from './axios';

export const signUp = async (email: string, password: string) => {
	try {
		const params = { email: email, password: password };
		const data = await baseInstance.post('/auth/signup', params);
		if (data.status === 201) {
			toast.success('회원가입 성공!');
			return data;
		} else {
			throw new Error('회원가입 실패');
		}
	} catch (err: any) {
		console.log(err.message);
	}
};

export const signIn = async (email: string, password: string) => {
	try {
		const params = { email: email, password: password };
		const data = await baseInstance.post('/auth/signin', params);
		if (data.status === 200) {
			toast.success('로그인 성공!');
			localStorage.setItem('accessToken', data.data.access_token);
			return data;
		} else {
			throw new Error('로그인 실패');
		}
	} catch (err: any) {
		console.log(err.message);
	}
};

export const getTodos = async () => {
	try {
		const data = await authInstance.get('/todos');
		if (data.status === 200) {
			return data;
		} else {
			throw new Error('로그인 실패');
		}
	} catch (err: any) {
		console.log(err.message);
	}
};
