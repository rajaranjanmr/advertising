import {createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/about', element: <Portfolio />},
    {path: '/contact', element: <Contact />}
  ])

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
