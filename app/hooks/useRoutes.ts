import { usePathname, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { HiChat } from 'react-icons/hi'
import { 
    HiArrowLeftOnRectangle, 
    HiUsers
} from 'react-icons/hi2'

import { signOut } from 'next-auth/react'
import useConversation from './useConversation'

const useRoutes = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            active: pathname === '/users'
        },
        {
            label: 'Logout',
            href: '/',
            icon: HiArrowLeftOnRectangle,
            onClick: () => {
                router.push('/')  
                signOut()
            } 
        }
    ], [conversationId, pathname, router])

    return routes;
}

export default useRoutes;
