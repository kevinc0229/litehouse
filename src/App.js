import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import Welcome from "./components/Welcome";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <main>
      <ButtonAppBar />
      <Welcome />
      <BottomNavigation />
    </main>
  );
}

export default App;
