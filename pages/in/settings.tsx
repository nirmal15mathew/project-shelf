import Head from "next/head";
import PageHeader from "../../libs/components/PageHeader";

export default function Shelf() {
    return (
        <div className="p-2">
            <Head>
                <title>
                    Project Shelf - Settings
                </title>
            </Head>
            <PageHeader>
                Settings
            </PageHeader>
        </div>
    )
}