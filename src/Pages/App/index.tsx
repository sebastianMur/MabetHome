import '../../App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { MabetHomeGlobalProvider } from '../../Context/GlobalContext';
import { Header } from '../../Components/Organisms/Header';
import { NavbarTop } from '../../Components/Organisms/NavbarTop';
import { NavbarBottom } from '../../Components/Organisms/NavbarBottom';
import { Footer } from '../../Components/Organisms/Footer';
import { NavbarLeft } from '../../Components/Organisms/NavbarLeft';
function App() {
  return (
    <MabetHomeGlobalProvider>
      <BrowserRouter>
        <Header
          NavbarTop={<NavbarTop Search={<NavbarTop.Search />} />}
          NavbarBottom={<NavbarBottom />}
        />
        <AppRoutes />
        <NavbarLeft />
        <Footer />
      </BrowserRouter>
    </MabetHomeGlobalProvider>
  );
}

export default App;
