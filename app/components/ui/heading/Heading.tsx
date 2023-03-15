import { FC } from 'react'

interface IHeading {
	title: string
	classname?: string
}

const Heading: FC<IHeading> = ({ title, classname }) => {
	return (
		<h1
			className={`text-white text-opacity-80 font-semibold ${
				classname?.includes('xl') ? '' : 'text-3xl'
			}`}
		>
			{title}
		</h1>
	)
}

export default Heading
