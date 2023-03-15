import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/config/url.config'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map(movie => (
					<Link href={getMovieUrl(movie.slug)} key={movie._id}>
						<Image
							src={movie.poster}
							alt={movie.title}
							draggable={false}
							width={50}
							height={50}
							style={{ objectPosition: 'top', objectFit: 'cover' }}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className='text-white text-center my-4'>Movies Not Found</div>
			)}
		</div>
	)
}

export default SearchList
