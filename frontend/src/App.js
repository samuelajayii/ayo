import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="lg:mx-24 mx-8">
      <NavBar />
      {/* <Loader /> */}
      
      <Outlet/>
    </div>
  );
}

export default App;
