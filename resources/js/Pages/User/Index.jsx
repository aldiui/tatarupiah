import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import UserTable from "./Partials/UserTable";

export default function UserIndex({ auth, users, sessions }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            sessions={sessions}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    User
                </h2>
            }
        >
            <Head title="User" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <UserTable users={users} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
