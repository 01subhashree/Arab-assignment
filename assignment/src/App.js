import "./App.css";
import HomePage from "./homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="homeScreen">
        <div className="sidebarScreen">
          <Profile />
          <Sidebar />
        </div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
