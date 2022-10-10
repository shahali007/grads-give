import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage";
import DonationPage from "./pages/donation";
import DonationRecievingForm from "./pages/pay-with-card-form";
import ThankYouModal from "./pages/thank-you-modal";
import Invoice from "./pages/invoice";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/donation' element={<DonationPage />} />
        <Route path='/donor-details' element={<DonationRecievingForm onOpenModal={onOpenModal} />} />
        <Route path='/invoice' element={<Invoice />} />
      </Routes>
      <ThankYouModal open={isModalOpen} onCloseModal={onCloseModal} />
    </div>
  );
}

export default App;
