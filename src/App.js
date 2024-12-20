// Import necessary libraries and components
import React, { useState, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import Login from "./front-end/componensJSX/Login";
import Header from "./front-end/componensJSX/header";
import CardPlaneList from "./front-end/componensJSX/cardPlaneList";
import Modal from "./front-end/componensJSX/modal";
import litakStore from "./litakStore.json";
// import translationEN from "./front-end/locales/en/translation.json";
// import translationUA from "./front-end/locales/ua/translation.json";

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, currentUser: action.payload, loginError: "" };
    case "LOGOUT":
      return { ...state, currentUser: null };
    case "ERROR":
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const { t } = useTranslation();
  const [state, dispatch] = useReducer(authReducer, {
    currentUser: null,
    loginError: "",
  });
  const [planes, setPlanes] = useState(litakStore);
  const [selectedPlane, setSelectedPlane] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loginHandler = (username, password) => {
    const storedUsers = {
      admin: { username: "admin", password: "admin123", role: "admin" },
      owner: { username: "owner", password: "owner123", role: "owner" },
      user: { username: "user", password: "user123", role: "user" },
      guest: { username: "guest", password: "guest123", role: "guest" },
    };

    const user = Object.values(storedUsers).find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    } else {
      dispatch({ type: "ERROR", payload: t("invalid_credentials") });
    }
  };

  const handleCardClick = (plane) => {
    setSelectedPlane(plane);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPlane(null);
    setIsModalOpen(false);
  };

  const handleEdit = (updatedPlane) => {
    setPlanes((prevPlanes) =>
      prevPlanes.map((plane) =>
        plane.id === updatedPlane.id ? updatedPlane : plane
      )
    );
    setIsModalOpen(false);
  };

  const handleDelete = (planeId) => {
    setPlanes((prevPlanes) => prevPlanes.filter((plane) => plane.id !== planeId));
    setIsModalOpen(false);
  };

  const renderContentByRole = () => {
    return (
      <div className="plane-list">
        {planes.map((plane) => (
          <CardPlaneList
            key={plane.id}
            plane={plane}
            onClick={
              state.currentUser?.role === "guest"
                ? null
                : handleCardClick
            }
          />
        ))}
      </div>
    );
  };



  return (
    <Router>
      <div className="App">
        <Header />
        {!state.currentUser ? (
          <Login onLogin={loginHandler} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<React.Fragment>{renderContentByRole()}</React.Fragment>}
            />
          </Routes>
        )}
        {isModalOpen && selectedPlane && (
          <Modal
            isOpen={isModalOpen}
            plane={selectedPlane}
            onClosed={closeModal}
            onEdit={handleEdit}
            onDelete={handleDelete}
            role={state.currentUser?.role}
          />
        )}
      </div>
    </Router>
  );
};

export default App;