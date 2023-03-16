import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import AuthFields from '@/screens/auth/AuthFields'
import { IAuthInput } from '@/screens/auth/auth.interface'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'

const Auth = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		register: RegisterInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({ mode: 'onChange' })
	const login = (data: any) => {
		console.log(data)
	}
	const register = (data: any) => {
		console.log(data)
	}
	const onSubmit: SubmitHandler<IAuthInput> = data => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)
		reset()
	}
	return (
		<Meta title='Auth'>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title='Auth' classname='mb-6' />
					<AuthFields
						register={RegisterInput}
						formState={formState}
						isPasswordRequired={true}
					/>
					<div className={styles.buttons}>
						<Button
							type='submit'
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type='submit'
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
