import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getGenresList } from '@/utils/movies/getGenresList'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'

import styles from './MovieList.module.scss'
import MaterialIcon from '@/ui/MaterialIcon'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					src={movie.poster}
					alt={movie.title}
					width={65}
					height={97}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map((genre, idx) => (
							<Link
								href={getGenreUrl(genre.slug)}
								key={genre._id}
								legacyBehavior
							>
								<a>{getGenresList(idx, movie.genres.length, genre.name)}</a>
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<MaterialIcon name='MdStarRate' />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
