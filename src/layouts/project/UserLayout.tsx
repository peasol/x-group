import { Outlet } from "react-router";
import Header from '@/layouts/project/header/Header.tsx';
import Footer from '@/layouts/project/footer/Footer.tsx';
import FooterLink from '@/layouts/project/footer/FooterLink.tsx';

const UserLayout = () => {

  return (
    <>
      <Header />
      <div className="containers" id="contentNav">
        <Outlet />
      </div>
      <FooterLink />
      <Footer />
    </>
  )
}

export default UserLayout