
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from "./Routes/AppNavigation";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <AppNavigation />
      <Toaster />
    </div>
  );
}

export default App;
