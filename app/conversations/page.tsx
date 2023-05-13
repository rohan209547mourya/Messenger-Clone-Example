'use client'

import clsx from "clsx"
import EmptyState from "../components/EmptyState"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSession } from "next-auth/react"
import useConversation from "../hooks/useConversation"

const Home = () => {
    const {isOpen} = useConversation();
    const router = useRouter();
    const session = useSession();


    useEffect(() => {
        if(session.status === 'unauthenticated') {
            router.push('/');
        }   
    }, [router, session])


    return (
        <div
            className={clsx("lg:pl-80 h-full lg:block",
                    isOpen ? "block" : "hidden"
                )}
        >
            <EmptyState />
        </div>
    )
}

export default Home;