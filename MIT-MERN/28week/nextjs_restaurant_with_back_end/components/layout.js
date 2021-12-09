import { useContext } from 'react';
import AppContext from './context';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavItem } from 'reactstrap';

function Layout(props) {
  const { user } = useContext(AppContext);

  return (
    <div>
      <header>
        <style jsx>
          {`
            a{
              color: white;
            }
          `}
        </style>
        <Nav className="navbar navbar-dark bg-dark">
          <div style={{marginLeft: "10px"}}>
            <NavItem>
              <Link href="/">
                <a className="navbar-brand">Home</a>
              </Link>
            </NavItem>
          </div>
          <div className="d-flex align-items-end">
            <NavItem>
              {user ? (
                <h5>{user.username}</h5>
              ) : (
                <Link href="/createAccount">
                  <a className="nav-link">Sign Up</a>
                </Link>
              )}
            </NavItem>
            <NavItem>
                {user ? 
                (
                  <Link href="/">
                    <a className="nav-link">Logout</a>
                  </Link>
                ) : (
                  <Link href="/login">
                    <a className="nav-link">Login</a>
                  </Link>
                )}
            </NavItem>
          </div>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
}

export default Layout;