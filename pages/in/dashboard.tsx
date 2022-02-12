import Head from "next/head";
import DashboardCard from "../../libs/components/dashboard-components/DashboardCard";
import PageHeader from "../../libs/components/PageHeader";

export default function Shelf() {
    return (
        <div className="p-2">
            <Head>
                <title>
                    Project Shelf - Dashboard
                </title>
            </Head>
            <PageHeader>
                Dashboard
            </PageHeader>

            <main>
                <DashboardCard cardTitle="Completion Rate">
                    <h1 className="text-4xl text-gray-700 dark:text-slate-300">
                        8 / 15
                    </h1>
                </DashboardCard>
            </main>
        </div>
    )
}