import { ChangeEvent, FC } from 'react'

import styles from './SearchField.module.scss'
import MaterialIcon from '@/ui/MaterialIcon'

interface ISearchFiled {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchFiled> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name={'MdSearch'} />
			<input
				type='text'
				placeholder='Search'
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchField
