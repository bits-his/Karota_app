
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from "./Routes/AppNavigation";
import toast, { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
      <Toaster />
    </Provider>
  );
}

export default App;
