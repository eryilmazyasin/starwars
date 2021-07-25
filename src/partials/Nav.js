import React from "react";
import Button from '../components/Button';
import Logo from '../components/Logo';
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container-fluid p-0">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarstarwars" aria-controls="navbarstarwars" aria-expanded="false" aria-label="Toggle navigation">
          <Logo width="60" alt="starwars_logo" />
        </button>
        <div className="collapse navbar-collapse" id="navbarstarwars">
        <Link to="/home"><div className="navbar-brand me-5 d-none d-sm-block"><Logo width="100" alt="starwars_logo" /></div></Link>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Button url="/home" pathname={pathname}>Home</Button>
            <Button url="/people" pathname={pathname}>People</Button>
            <Button url="/starships" pathname={pathname}>Starships</Button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
