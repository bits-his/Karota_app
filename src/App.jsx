
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from "./Routes/AppNavigation";
import toast, { Toaster } from 'react-hot-toast';
import { Provider, useDispatch } from 'react-redux';

import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { init } from './redux/actions/auth';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // const initUser = useCallback(() => {
  //   dispatch(
  //     init(navigate,
  //       () => {
  //         navigate(`${location.pathname}${location.search}`);
  //       },
  //       () => {
  //         navigate('/login')
  //       }
  //     )
  //   );
  // }, []);

  // useEffect(() => {
  //   initUser()
  // }, [initUser])

  return (
    <>
      <AppNavigation />
      <Toaster />
    </>
  );
}

export default App;
