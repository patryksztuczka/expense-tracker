import { Outlet } from "react-router-dom";

const PrivateTemplate = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-black p-10">
      <header className="absolute top-10 left-10 flex justify-start">
        <h1 className="text-3xl font-bold text-white">Spendify</h1>
      </header>
      <Outlet />
    </div>
  );
};

export default PrivateTemplate;
