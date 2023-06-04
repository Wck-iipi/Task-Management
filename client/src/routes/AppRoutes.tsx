import { protectedRoutes } from './Protected';
import { publicRoutes } from './Public';
import { useRoutes } from 'react-router-dom';

const AppRoutes = () => {
  function authentication(): boolean {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   return true;
    // }
    // return false;
    return false;
  }
  const routes = authentication() ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes]);

  return <>{element}</>
}

export default AppRoutes;
