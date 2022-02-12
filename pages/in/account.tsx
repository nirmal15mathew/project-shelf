import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "../../libs/firebase";
import PageHeader from "../../libs/components/PageHeader";

export default function Shelf() {
    const auth = useAuth()
    const router = useRouter()
    return (
        <div className="p-2">
            <Head>
                <title>
                    Project Shelf - Account
                </title>
            </Head>
            <PageHeader>
                Account
            </PageHeader>

            <section>
                {auth.currentUser?.displayName}

                <button onClick={() => {router.replace('/login');auth.signOut()}} className="p-2 m-2 rounded bg-red-600 text-white shadow">
                    Sign Out
                </button>
            </section>
        </div>
    )
}