import Routes from "./components/Routes";
import AccordionPage from './pages/AccordionPage';
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from './pages/ButtonPage';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Routes path="/accordion">
          <AccordionPage />
        </Routes>
        <Routes path="/">
          <DropdownPage />
        </Routes>
        <Routes path="/buttons">
          <ButtonPage />
        </Routes>
      </div>
    </div>
  );
}


export default App;