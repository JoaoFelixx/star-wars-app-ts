import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import {
  HomePage,
  Vehicles,
  PeoplePage,
} from 'pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;