import React,{useState, useEffect} from "react";
import { useRouter } from "next/router";
import { fetchPlaneById } from "../../services/PlaneService"
import { Plane } from "../../../back-end/model/plane";
import Modal from "../../components/Modal";

const image = require("../../assets/media/C310.jpg");

const PlaneDetailsPage: React.FC = () => {
    const[plane, setPlane] = useState<Plane | null>(null);
    const[isPlaneModalOpen, setIsPlaneModalOpen] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            fetchPlaneById(Number(id)).then(setPlane);
        }
    }, [id]);

    return (
        <Modal isOpen={isPlaneModalOpen} onClose={() => router.push("/")}>
            {plane ? (
                <div>
                    <h2>
                        {plane.name}
                    </h2>
                    <img src={plane.image} alt={plane.name} />
                    <p>
                        <b>Capacity:</b> {plane.capacity}
                    </p>
                    <p>
                        <b>Manufacturer:</b> {plane.manufacturer}
                    </p>
                    <p>
                        <b>Year:</b> {plane.year}
                    </p>
                </div>
            )
            : (
                <p>Loading...</p>
            )}
        </Modal>
    );
};

export default PlaneDetailsPage;