import { BallTriangle } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="w-fit h-fit mx-auto my-6">
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="#2ebff0"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
