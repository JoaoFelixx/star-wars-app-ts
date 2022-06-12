import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import {
  Films,
  Species,
  HomePage,
  Vehicles,
  PeoplePage,
  Planets,
} from 'pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path='/species' element={<Species />} />
        <Route path="/planets" element={<Planets />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;