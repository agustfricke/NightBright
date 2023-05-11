import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
      <div className="flex justify-center min-h-screen bg-white dark:bg-gray-900 ">
        <div>
        <Header />
        <Outlet />
        </div>
      </div>
  )
}

export default Layout
