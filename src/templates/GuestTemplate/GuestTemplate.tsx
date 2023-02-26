import { Outlet } from "react-router-dom";

const GuestTemplate = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-black p-10">
      <header className="absolute top-10 left-10 flex justify-start">
        <h1 className="text-3xl font-bold text-white">Spendify</h1>
      </header>
      <h3 className="pb-5 text-justify font-medium text-white ">
        Stay on top of your spending, and pave the way to financial freedom.
      </h3>
      <Outlet />
    </div>
  );
};

export default GuestTemplate;
