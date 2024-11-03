import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import PlaneCard from "../components/PlaneCard";
import { fetchPlaneById, fetchPlanes } from "@services/PlaneService";
import { Plane } from "../../back-end/model/plane";
import Modal from "../components/Modal";


const HomePage: React.FC = () => {
    const [planes, setPlanes] = useState<Plane[]>([]);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [isPlaneModalOpen, setIsPlaneModalOpen] = useState(false);
    const [selectedPlane, setSelectedPlane] = useState<Plane | null>(null);

    useEffect(() => {
        fetchPlanes().then(setPlanes);
    }, []);

    const onFilterModal = () => {
        setIsFilterModalOpen(true);
    };

    const closeFilterModal = () => {
        setIsFilterModalOpen(false);
    };

    const openPlaneModal = async (planeId: number) => {
        const plane = await fetchPlaneById(planeId);
        setSelectedPlane(plane);
        setIsPlaneModalOpen(true);
    };

    const closePlaneModal = () => {
        setIsPlaneModalOpen(false);
        setSelectedPlane(null);
    };

    return (
        <>
            <Header onFilterClick={onFilterModal}/>
            <div className="card-plane">
                {planes.map(plane => (
                    <PlaneCard key={plane.id} plane={plane} onClick={() => openPlaneModal(plane.id)} />
                ))}
            </div>
            <Modal isOpen={isFilterModalOpen} onClose={closeFilterModal}>
                <h3>Setups for filter</h3>
            </Modal>
            <Modal isOpen={isPlaneModalOpen} onClose={closePlaneModal}>
                {selectedPlane && (
                    <>
                        <h3>{selectedPlane.name}</h3>
                        <p>{selectedPlane.description}</p>
                        <img src={selectedPlane.image} alt={selectedPlane.name} />
                        <div className="plane-info">
                            <p><b>Capacity:</b> {selectedPlane.capacity}</p>
                            <p><b>Manufacturer:</b> {selectedPlane.manufacturer}</p>
                            <p><b>Year:</b> {selectedPlane.year}</p>
                            <button className='rent-button'>
                                Rent in One Click: {selectedPlane.price}$
                            </button>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
};

export default HomePage;