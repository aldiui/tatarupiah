import { TrashIcon } from "@heroicons/react/24/solid";
import Button from "@/Components/Button";
import Modal from "@/Components/Modal";
import { useState } from "react";
import SecondaryButton from "@/Components/SecondaryButton";
import { router } from "@inertiajs/react";

export default function DeleteUser({ user }) {
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
    };

    const onDeleteUser = () => {
        if (user) {
            router.delete(route("user.destroy", user.uuid), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    closeModal();
                },
            });
        }
    };

    return (
        <>
            <Button
                onClick={() => setOpenModal(true)}
                className="bg-red-500 hover:bg-red-600 active:bg-red-600 focus:bg-red-600 text-white flex gap-x-2"
            >
                <TrashIcon className="h-4 w-4" />
                Delete
            </Button>
            <Modal show={openModal} maxWidth="sm" onClose={closeModal}>
                <div className="p-6 text-center">
                    <TrashIcon className="h-16 w-16 mx-auto text-red-500 mb-3" />
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete user {user.name}?
                    </h2>

                    <div className="flex justify-center mt-3 gap-x-2">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                        <Button
                            onClick={onDeleteUser}
                            className="bg-red-500 hover:bg-red-600 active:bg-red-600 focus:bg-red-600 text-white flex gap-x-2"
                        >
                            <TrashIcon className="h-4 w-4" />
                            Delete
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
