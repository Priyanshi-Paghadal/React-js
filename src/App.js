import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="SparkWeb" about="About Us" />
      <div className="container my-3">
        <TextForm heading="Information..."/>
      </div>
    </>
  );
}

export default App;
