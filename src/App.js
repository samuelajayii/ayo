import Home from "./Home";
import NavBar from "./NavBar";
import Works from "./Works";

function App() {
  return (
    <div className="lg:mx-24 mx-8">
      <NavBar />
      {/* <Loader /> */}
      <Home/>
      <Works/>
    </div>
  );
}

export default App;
