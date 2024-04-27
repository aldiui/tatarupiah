import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { UserIcon } from "@heroicons/react/24/solid";
export default function Dashboard({ auth, data }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center place-content-center place-items-center w-full">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full">
                            <div className="p-6 text-gray-900 flex flex-col lg:flex-row items-center gap-5">
                                <UserIcon className="h-16 w-16 text-blue-500" />
                                <div className="text-center md:text-left">
                                    <div className="text-lg font-semibold mb-2">
                                        Total Users
                                    </div>
                                    <div className="text-2xl">{data.user}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
