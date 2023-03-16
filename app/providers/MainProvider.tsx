import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import Layout from '@/components/layout/Layout'

import ReduxToastr from './ReduxToastr'
import { store } from '@/store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { refetchOnWindowFocus: false },
	},
})

const MainProvider: FC<{ children: JSX.Element }> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReduxToastr />
				<Layout>{children}</Layout>
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
