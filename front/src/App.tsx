import { BrowserRouter } from 'react-router';
import '@/App.css';
import Router from '@/routes/Router';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
