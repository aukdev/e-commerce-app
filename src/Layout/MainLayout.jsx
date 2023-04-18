import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PaymentModal from "../Modals/PaymentModal";

const MainLayout = () => {
  const paymentModalRef = useRef();

  return (
    <div className=" overflow-hidden w-screen h-screen">
      <PaymentModal ref={paymentModalRef} />
      <Header paymentModalRef={paymentModalRef} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
