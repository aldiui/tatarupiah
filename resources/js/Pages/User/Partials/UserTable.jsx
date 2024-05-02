import Button from "@/Components/Button";
import Pagination from "@/Components/Pagination";
import SelectBox from "@/Components/SelectBox";
import TextInput from "@/Components/TextInput";
import { Link, router } from "@inertiajs/react";
import { pickBy } from "lodash";
import { useRef, useState } from "react";
import {
    MagnifyingGlassIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/solid";
import DeleteUser from "./DeleteUser";
import SecondaryButton from "@/Components/SecondaryButton";

export default function UserTable({ users }) {
    const perpage = useRef(users.per_page);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");

    const handleChangePerPage = (e) => {
        perpage.current = parseInt(e.target.value);
        getData();
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
        getData();
    };

    const getData = () => {
        setIsLoading(true);
        router.get(
            route("user.index"),
            pickBy({ perpage: perpage.current, search: search }),
            {
                onFinish: () => setIsLoading(false),
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

    const calculateIndex = (index) => users.from + index;

    return (
        <div className="overflow-x-auto">
            <div className="flex justify-between items-center mb-8 p-1">
                <SelectBox
                    id="perpage"
                    name="perpage"
                    value={perpage.current}
                    option={[
                        { value: "25", label: "25" },
                        { value: "50", label: "50" },
                        { value: "100", label: "100" },
                        { value: "250", label: "250" },
                        { value: "500", label: "500" },
                    ]}
                    onChange={handleChangePerPage}
                />
                <form className="flex gap-x-2" onSubmit={handleSearch}>
                    <TextInput
                        id="search"
                        name="search"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <SecondaryButton type="submit" className="flex gap-x-2">
                        <MagnifyingGlassIcon className="h-4 w-4" />
                        Search
                    </SecondaryButton>
                </form>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="border-b-2">
                        <th className="p-2 text-left text-md font-semibold text-black w-10">
                            #
                        </th>
                        <th className="p-2 text-left text-md font-semibold text-black">
                            Nama
                        </th>
                        <th className="p-2 text-left text-md font-semibold text-black">
                            Email
                        </th>
                        <th className="p-2 text-left text-md font-semibold text-black w-1/6">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan={6} className="p-2 text-center">
                                Loading...
                            </td>
                        </tr>
                    ) : users.data.length === 0 ? (
                        <tr>
                            <td colSpan={6} className="p-2 text-center">
                                No data found
                            </td>
                        </tr>
                    ) : (
                        users.data.map((user, index) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-2 whitespace-nowrap">
                                    {calculateIndex(index)}
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    {user.nama}
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    {user.email}
                                </td>
                                <td className="p-2 whitespace-nowrap flex gap-x-1">
                                    <Link href={route("user.edit", user.id)}>
                                        <Button className="bg-amber-500 hover:bg-amber-600 active:bg-amber-600 focus:bg-amber-600  text-white flex gap-x-2">
                                            <PencilSquareIcon className="h-4 w-4" />
                                            Edit
                                        </Button>
                                    </Link>
                                    <DeleteUser user={user} />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <div className="flex gap-4 flex-col  md:flex-row justify-center md:justify-between items-center mt-8">
                <div className="text-gray-500 text-sm">
                    Showing {users.from ?? 0} to {users.to ?? 0} total{" "}
                    {users.total ?? 0}
                </div>
                <Pagination links={users.links}></Pagination>
            </div>
        </div>
    );
}
