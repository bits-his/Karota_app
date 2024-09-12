
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from "./Routes/AppNavigation";
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { init } from './redux/actions/auth';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const initUser = useCallback(() => {
    dispatch(
      init(navigate,
        () => {
          console.log(`${location.pathname}${location.search}`);
          navigate(`${location.pathname}${location.search}`);
        },
        () => {
          navigate('/login')
        }
      )
    );
  }, [navigate]);

  useEffect(() => {
    initUser()
  }, [initUser])

  return (
    <>
      <AppNavigation />
      <Toaster />
    </>
  );
}

export default App;
