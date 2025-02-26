import { FaCheck } from "react-icons/fa";
import Login from "./component/Login";
import Image from "next/image";
import AuthSideBar from "./component/AuthSideBar";


export default function Home() {
  return (
    <div className="w-full h-[100vh] flex overflow-x-hidden">
      
      <div className="h-full  w-2/3 hidden md:flex flex-col  justify-center items-center">
        <AuthSideBar />
      </div>
      <div className="h-full w-full flex flex-col p-14  justify-center items-center">
        
        <Login />
      </div>

    </div>
  );
}
