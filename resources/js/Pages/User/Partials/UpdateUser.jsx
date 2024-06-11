import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function UpdateUser({ user }) {
    const { data, setData, patch, errors, processing } = useForm({
        nama: user.nama,
        nama_toko: user.nama_toko,
        email: user.email,
        no_handphone: user.no_handphone,
        alamat: user.alamat ?? "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route("user.update", user.id));
    };

    return (
        <section className="w-full">
            <header>
                <h2 className="text-lg font-medium text-gray-900">Edit User</h2>
            </header>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                        <InputLabel htmlFor="nama" value="Nama" />

                        <TextInput
                            id="nama"
                            className="mt-1 block w-full"
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
                            autoComplete="nama"
                        />

                        <InputError className="mt-2" message={errors.nama} />
                    </div>
                    <div>
                        <InputLabel htmlFor="nama_toko" value="Nama Toko" />

                        <TextInput
                            id="nama_toko"
                            className="mt-1 block w-full"
                            value={data.nama_toko}
                            onChange={(e) =>
                                setData("nama_toko", e.target.value)
                            }
                            autoComplete="nama_toko"
                        />

                        <InputError
                            className="mt-2"
                            message={errors.nama_toko}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            autoComplete="email"
                        />

                        <InputError className="mt-2" message={errors.email} />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="no_handphone"
                            value="No. Handphone"
                        />

                        <TextInput
                            id="no_handphone"
                            type="number"
                            className="mt-1 block w-full"
                            value={data.no_handphone}
                            onChange={(e) =>
                                setData("no_handphone", e.target.value)
                            }
                            autoComplete="no_handphone"
                        />

                        <InputError
                            className="mt-2"
                            message={errors.no_handphone}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="alamat" value="Alamat" />

                        <TextArea
                            id="alamat"
                            className="mt-1 block w-full h-32"
                            value={data.alamat}
                            onChange={(e) => setData("alamat", e.target.value)}
                            autoComplete="alamat"
                        />

                        <InputError className="mt-2" message={errors.alamat} />
                    </div>

                    <div></div>
                    <div>
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            className="mt-1 block w-full"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            autoComplete=""
                        />

                        <InputError
                            className="mt-2"
                            message={errors.password}
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            className="mt-1 block w-full"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            autoComplete=""
                        />

                        <InputError
                            className="mt-2"
                            message={errors.password_confirmation}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                </div>
            </form>
        </section>
    );
}
