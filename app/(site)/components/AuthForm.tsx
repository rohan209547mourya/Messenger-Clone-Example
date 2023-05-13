'use client'

import Button from "@/app/components/Button";
import Input from "@/app/components/Inputs/Input";
import { 
    useCallback,
    useEffect,
    useState 
} from "react"
import { 
    useForm, 
    FieldValues, 
    SubmitHandler 
} from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from 'react-icons/bs'
import axios from "axios";
import { toast } from 'react-hot-toast'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";


type Variant = 'LOGIN' | 'REGISTER';


const AutoForm = () => {
    const session = useSession();
    const router = useRouter();
    const [variant , setVeriant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState<boolean>(false)


    useEffect(() => {
        
        if(session?.status === 'authenticated') {
            router.push('/users')
        }
    }, [session?.status, router])

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN') {
            setVeriant('REGISTER')
        }
        else {
            setVeriant('LOGIN')
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if(variant === 'REGISTER') {
            axios.post('/api/register', data)
            .then((res) => {
                signIn('credentials', data)
                toast.success("Account created successfully.. loggin in!")
            })
            .catch((err) => {
                toast.error("Something went wrong")
            })
            .finally(() => {
                setIsLoading(false);
            })
        }

        if(variant === 'LOGIN') {
            signIn('credentials', {
                ...data, redirect: false
            })
            .then((res) => {
                if(res?.error) toast.error("Invalid credentials")
                
                if(res?.ok && !res?.error) {
                    toast.success("Logged in successfully")
                }
            })
            .finally(() => {
                setIsLoading(false);
            })
        }

    }

    const socialAction = (action: string) => {
        setIsLoading(true);
    
        signIn(action, { redirect: false })
          .then((callback) => {
            if (callback?.error) {
              toast.error('Invalid credentials!');
            }
    
            if (callback?.ok) {
              toast.success('Logged in successfully!');
              router.push('/users');
            }
          })
          .finally(() => setIsLoading(false));
    } 


    return (
        <div
        className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md">   
            <div 
                className="
                    bg-white
                    py-8
                    px-4
                    shadow
                    sm:rounded-lg
                    sm:px-10">
                <form 
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >   
                    {
                        variant === 'REGISTER' && (
                            <Input
                                type="text"
                                id="name"
                                label="Name"
                                register={register}
                                errors={errors}
                                disabled={isLoading}
                            />
                        )
                    }
                    <Input
                        id="email"
                        label="Email"
                        type="email"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input
                        id="password"
                        type="password"
                        label="Password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <div>
                        <Button
                            type="submit"
                            fullWidth
                            disabled={isLoading}
                        >
                            {
                                variant === 'LOGIN' ? 'Sign in' : 'Register'
                            }
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="
                                absolute 
                                inset-0 
                                flex 
                                items-center">
                        <div className="
                                w-full 
                                border-t
                              border-gray-300"/>       
                     </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="
                                px-2
                                bg-white
                                text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>
                <div
                    className="
                        mt-6
                        flex
                        gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                </div>
            </div>     
            <div className="
                    mt-6
                    px-2
                    flex
                    gap-2
                    justify-center
                    text-sm
                    text-gray-500">
                <div>
                    {variant === 'LOGIN' ? 'Don\'t have an account?' : 'Already have an account?'}
                </div>
                <div className="
                        cursor-pointer
                        underline
                    "
                    onClick={toggleVariant}>
                        {
                            variant === 'LOGIN' ? 'Register' : 'Login'
                        }
                </div>
            </div>     
        </div>
    </div>
    )
}

export default AutoForm