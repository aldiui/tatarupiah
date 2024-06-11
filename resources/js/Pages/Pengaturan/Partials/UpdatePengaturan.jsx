import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectBox from "@/Components/SelectBox";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function UpdatePengaturan({ pengaturan }) {
    const { data, setData, post, errors, processing } = useForm({
        key: pengaturan.key,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("pengaturan"));
    };

    return (
        <section className="w-full">
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Edit Pengaturan
                </h2>
            </header>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                        <InputLabel htmlFor="key" value="Key" />

                        <TextInput
                            id="key"
                            className="mt-1 block w-full"
                            value={data.key}
                            onChange={(e) => setData("key", e.target.value)}
                            autoComplete="key"
                        />

                        <InputError className="mt-2" message={errors.key} />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                </div>
            </form>
        </section>
    );
}
