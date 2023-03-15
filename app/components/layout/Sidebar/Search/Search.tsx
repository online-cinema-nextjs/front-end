import { FC } from 'react'

import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'
import { useSearch } from './useSearch'
import SearchField from '@/ui/search-field/SearchField'

const Search: FC = () => {
	const { isSuccess, data, handlerSearch, searchTerm } = useSearch()
	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handlerSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
