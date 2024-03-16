import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Home } from './pages/Home'
import { Registration } from './pages/Registration'
import { Login } from './pages/Login'
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import React from 'react';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  

  return (
    <>
      <Routes>
        <Route path="/GScope" element={<Home />} />
        <Route path="/GScope/login" element={<Login />} />
        <Route path="/GScope/register" element={<Registration />} />
        {/* <Home />
        <Registration />
        <Login /> */}
      </Routes>
    </>
  )
}

export default App
