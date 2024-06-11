import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import UpdatePengaturan from "./Partials/UpdatePengaturan";

export default function Pengaturan({ auth, pengaturan, sessions }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            sessions={sessions}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pengaturan
                </h2>
            }
        >
            <Head title="Pengaturan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePengaturan pengaturan={pengaturan} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
