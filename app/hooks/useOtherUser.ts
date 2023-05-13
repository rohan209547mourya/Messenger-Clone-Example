import { useSession } from 'next-auth/react';
import { useMemo } from 'react';
import { FullConversationType } from '../types';
import { User } from '@prisma/client';

const useOtherUser = (conversation: FullConversationType | {
    users: User[]; 
}) => {

    const session = useSession();
    const otherUser = useMemo(() => {
        const currenUserEmail = session?.data?.user?.email;
        const otherUser = conversation.users.filter(user => user.email !== currenUserEmail);

        return otherUser[0];
    }, [conversation, session?.data?.user?.email]);

    return otherUser;
}

export default useOtherUser;