import Header from "./components/Layouts/Header/Header";
import Sidebar from "./components/Layouts/Sidebar/Sidebar";
import Mainpage from "./components/pages/Mainpage/Mainpage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Mainpage />
    </div>
  );
}

export default App;
