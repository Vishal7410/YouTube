import { Outlet } from "react-router-dom";
// import MainContainer from "./MainContainer";
import SideBar from "./SideBar"
// import WatchPage from "./WatchPage";

const Body = () => {
  return (
    <div className="flex">
       <SideBar />
       <Outlet/>

      {/* <MainContainer/>
      <WatchPage/> */}
    </div>
  );
}

export default Body