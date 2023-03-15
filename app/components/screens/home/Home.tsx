import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'
import Heading from '@/ui/heading/Heading'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title='Watch Movies Online'
			description='Watch MovieApp movies and TV shows online or stream right to your browser.'
		>
			<Heading
				title='Watch Movies Online'
				classname='text-gray-300 mb-8 text-xl'
			/>
		</Meta>
	)
}

export default Home
