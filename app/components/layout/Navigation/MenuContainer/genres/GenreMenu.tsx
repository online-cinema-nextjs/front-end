import Menu from '@/components/layout/Navigation/MenuContainer/Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()
	return isLoading ? (
		<div className='mx-11 mb-6'>Loading..</div>
	) : (
		<Menu menu={{ title: 'Popular Genres', items: data || [] }} />
	)
}

export default GenreMenu
