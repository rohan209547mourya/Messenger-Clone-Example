import prisma from '@/app/libs/prismadb';
import getCurrenUser from './getCurrentUser';

const getConversations = async () => {
    
    const currentUser = await getCurrenUser();

    if(!currentUser?.id) return [];

    try {
        
        const conversation = await prisma.conversation.findMany({
            orderBy: {
                lastMessageAt: 'desc'
            },
            where: {
                userIds: {
                    has: currentUser.id
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        sender: true,
                        seen: true,
                    }
                }
            }
        });

        return conversation;

    } catch (error: any) {
        return [];
    }
}

export default getConversations;