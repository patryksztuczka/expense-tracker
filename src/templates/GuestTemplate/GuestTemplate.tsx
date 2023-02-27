import { Outlet } from "react-router-dom";

const GuestTemplate = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-black p-6">
      {/* <header className="flex w-full justify-start bg-gray-300">
        <h1 className="text-3xl font-bold text-white">Spendify</h1>
      </header> */}
      <Outlet />
    </div>
  );
};

export default GuestTemplate;
