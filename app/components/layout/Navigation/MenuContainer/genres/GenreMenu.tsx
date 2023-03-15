import Menu from '@/components/layout/Navigation/MenuContainer/Menu'

import { usePopularGenres } from './usePopularGenres'
import SkeletonLoader from '@/ui/SkeletonLoader'

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()
	return isLoading ? (
		<div className='mx-11 mb-6'>
			<SkeletonLoader className='h-7 mt-6' count={5} />
		</div>
	) : (
		<Menu menu={{ title: 'Popular Genres', items: data || [] }} />
	)
}

export default GenreMenu
