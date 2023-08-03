import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import UserDetailsModal from "../../components/UserDetailsModel";

const DashboardNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav>
        <div>
          <button onClick={handleOpenModal}>View My Details</button>
          <UserDetailsModal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
          />
        </div>
        <Link to="/home">Home|</Link>
        <Link to="/my_appointments">My Appointments|</Link>
        <Link to="/my_medications">My Medications|</Link>
        <Link to="/my_medical_records">My Medical Records|</Link>
        <Link to="/medical_professionals">Medical Professionals|</Link>
        <Link to="/managers">Managers </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default DashboardNav;
