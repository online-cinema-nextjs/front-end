import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import { validEmail } from '@/shared/regex'

import Field from '@/ui/form-elements/Field'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	isPasswordRequired = false,
	formState: { errors },
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder='E-mail'
				// @ts-ignore
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should be more than 6 symbols',
								},
						  }
						: {}
				)}
				placeholder='Password'
				type='password'
				// @ts-ignore
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
