import './App.css';
import React, { useState } from 'react';

import Header from '../src/front-end/componensJSX/header';
import CardPlaneList from '../src/front-end/componensJSX/cardPlane';
import Modal from '../src/front-end/componensJSX/modal';

import imagePILATUS from '../../project2425-bcs-group2-14/src/assets/media/pc-12.jpg';
import imageNOTPILATUS from '../../project2425-bcs-group2-14/src/assets/media/C310.jpg';

const Planes = [
  { id: 1, image: imagePILATUS, name: "Boeing 747", capacity: 416, range: 14815, type: "Passenger", price: 3200, email: "labudi@mail.com", location: "JFK", maxTakeoffWeight: 447700 },
  { id: 2, image: imageNOTPILATUS, name: "Boeing 777", capacity: 396, range: 11000, type: "Passenger", price: 3000, email: "labudi@mail.com", location: "LAX", maxTakeoffWeight: 351500 },
  { id: 3, image: imagePILATUS, name: "Boeing 737", capacity: 215, range: 5460, type: "Passenger", price: 2500, email: "labudi@mail.com", location: "ORD", maxTakeoffWeight: 79015 },
  { id: 4, image: imageNOTPILATUS, name: "Airbus A380", capacity: 853, range: 15200, type: "Passenger", price: 3500, email: "labudi@mail.com", location: "DXB", maxTakeoffWeight: 560000 },
  { id: 5, image: imagePILATUS, name: "Airbus A320", capacity: 180, range: 6100, type: "Passenger", price: 2000, email: "labudi@mail.com", location: "ATL", maxTakeoffWeight: 78000 },
  { id: 6, image: imageNOTPILATUS, name: "Airbus A340", capacity: 375, range: 13450, type: "Passenger", price: 2800, email: "labudi@mail.com", location: "LHR", maxTakeoffWeight: 275000 },
];

const App = () => {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [isPlaneModalOpen, setPlaneModalOpen] = useState(false);
  const [selectedPlane, setSelectedPlane] = useState(null);
  const [showEmail, setShowEmail] = useState(false);

  const openFilterModal = () => {
    setFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setFilterModalOpen(false);
  };

  const closePlaneModal = () => {
    setPlaneModalOpen(false);
    setSelectedPlane(null);
    console.log("Modal closed");
  };

  const openPlaneModal = (plane) => {
    console.log("Plane clicked:", plane);
    setSelectedPlane(plane);
    setPlaneModalOpen(true);
    console.log("Modal opened with plane:", plane);
    setShowEmail(false);
  };
  const toggleShowEmail = () => {
    setShowEmail((prev) => !prev);
  };

  return (
    <div className="App">
      <Header onFilterClick={openFilterModal} />
      <div className="card-cluster">
        {Planes.map((plane) => (
          <CardPlaneList key={plane.id} plane={plane} onClick={openPlaneModal} />
        ))}
      </div>
      <Modal 
        isOpen={isPlaneModalOpen} 
        onClosed={closePlaneModal} 
        plane={selectedPlane} 
        showEmail={showEmail}
        onContactClick={toggleShowEmail}
      />
    </div>
  );
};

export default App;
