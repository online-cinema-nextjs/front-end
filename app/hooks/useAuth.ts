import { useTypedSelector } from '@/hooks/useTypedActions'

export const useAuth = () => useTypedSelector(state => state.user)
