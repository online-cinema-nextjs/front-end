import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title='Watch Movies Online'
			description='Watch MovieApp movies and TV shows online or stream right to your browser.'
		>
			<h1>Home</h1>
		</Meta>
	)
}

export default Home
