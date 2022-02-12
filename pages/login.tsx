import { signInWithPopup } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth"
import { useRouter } from "next/router"
import { useAuth } from "../libs/firebase"

export default function Login() {
    const googleProvider = new GoogleAuthProvider()
    const auth = useAuth()
    const router = useRouter()
    function signInWithGoogle() {
        signInWithPopup(auth, googleProvider)
        router.replace('/in/shelf')
    }

    function signInWithEmail(email: string, password: string) {
        signInWithEmail(email, password)
    }
    return (
        <div className="px-3 py-2 flex items-center justify-center">
            <form className="p-2 rounded bg-slate-100 dark:bg-neutral-600 shadow flex flex-col gap-y-4 w-1/4" >
                <header className="mt-1 w-full text-center">
                    <h1 className="text-lg text-gray-700 font-semibold">
                        Sign In
                    </h1>
                </header>
                <input type="text" className="p-2 border-b-2 border-gray-400 bg-transparent outline-none focus:border-blue-600 mx-2 dark:text-white" placeholder="Email"/>
                <input type="password" className="p-2 border-b-2 border-gray-400 bg-transparent outline-none focus:border-blue-600 mx-2 dark:text-white" placeholder="Password"/>
                <button className="p-2 rounded bg-blue-600 text-white shadow">Sign In</button>
                <button className="p-2 rounded bg-white text-gray-700 shadow" onClick={(e) => {e.preventDefault();signInWithGoogle()}}>Sign in with Google</button>
            </form>
        </div>
    )
}