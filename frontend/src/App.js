import './App.css';
import Header from './components/Header';
import { RouterProvider } from 'react-router-dom';
import appRouter from './router/router';
function App() {
  return (
    <div className='App'>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
