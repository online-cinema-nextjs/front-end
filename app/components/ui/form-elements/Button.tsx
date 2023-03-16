import cn from 'classnames'
import { FC } from 'react'

import styles from './Form.module.scss'
import { IButton } from '@/ui/form-elements/form.interface'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
