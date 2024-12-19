import './App.css';
import React, { useState } from 'react';

import Header from '../src/front-end/componensJSX/header';
import CardPlaneList from '../src/front-end/componensJSX/cardPlane';
import Modal from '../src/front-end/componensJSX/modal';
// import Campanenta from './front-end/componensJSX/campanenta';
// import Labuda from './front-end/componensJSX/labuda';
// import Modelka from './front-end/componensJSX/modelka';

import imageP12 from '../../project2425-bcs-group2-14/src/assets/media/pc-12.jpg';
import imageC310 from '../../project2425-bcs-group2-14/src/assets/media/C310.jpg';
import imageG36 from '../../project2425-bcs-group2-14/src/assets/media/BeechCraftBonanzaG36.jpg';
import imageDiamond from '../../project2425-bcs-group2-14/src/assets/media/DiamondDA40NGl.jpg';
import imageIconA5 from '../../project2425-bcs-group2-14/src/assets/media/iconA5.jpg';
import imageCarbonSS from '../../project2425-bcs-group2-14/src/assets/media/CubCraftersCarbonCubSS.jpg';

const Planes = [
  { id: 1, image: imageP12, name: "Pilatus PC-12", capacity: 9, range: 2850, type: "Passenger", price: 3200, email: "labudi@mail.com", location: "JFK", maxTakeoffWeight: 4740 },
  { id: 2, image: imageC310, name: "Cessna 310", capacity: 6, range: 2500, type: "Passenger", price: 3000, email: "labudi@mail.com", location: "LAX", maxTakeoffWeight: 2400 },
  { id: 3, image: imageG36, name: "Beechcraft Bonanza G36", capacity: 6, range: 1500, type: "Passenger", price: 2500, email: "labudi@mail.com", location: "ORD", maxTakeoffWeight: 1650 },
  { id: 4, image: imageDiamond, name: "Diamond DA40 NG", capacity: 4, range: 1400, type: "Passenger", price: 3500, email: "labudi@mail.com", location: "DXB", maxTakeoffWeight: 1310 },
  { id: 5, image: imageIconA5, name: "Icon A5", capacity: 2, range: 700, type: "Passenger", price: 2000, email: "labudi@mail.com", location: "ATL", maxTakeoffWeight: 686 },
  { id: 6, image: imageCarbonSS, name: "CubCrafters Carbon Cub SS", capacity: 2, range: 800, type: "Passenger", price: 2800, email: "labudi@mail.com", location: "LHR", maxTakeoffWeight: 680 },
];

const App = () => { 
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [isPlaneModalOpen, setPlaneModalOpen] = useState(false);
  const [selectedPlane, setSelectedPlane] = useState(null);
  const [showEmail, setShowEmail] = useState(false);

  const [selectedPaleta, setSelectedPaleta] = useState(null);


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




  const openPaletaModal = (gamno) => {
      selectedPaleta(gamno);
      setSelectedPaleta(true);
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
      {/* <Campanenta/>
      <Labuda
        onClick={openPaletaModal}
      />     
      <Modelka
        isOpen={isPlaneModalOpen} 
        onClosed={closePlaneModal} 
        gamno={selectedPaleta}
      /> */}
    </div>
  );
};

export default App;
