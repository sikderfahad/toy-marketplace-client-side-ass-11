import { Outlet } from "react-router-dom";
import ToastBox from "../../components/Toast/ToastBox";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import { useEffect, useState } from "react";
// import PreLoading from "../../components/PreLoading/PreLoading";
import { LoadingTriangle } from "../../components/Spinner/Spinner";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Change this value as needed
  }, []);
  return (
    <div>
      {isLoading ? (
        // <PreLoading />
        <LoadingTriangle />
      ) : (
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <ToastBox></ToastBox>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Root;
