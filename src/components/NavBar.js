import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28"/>
            </a>

            {/* <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a> */}
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <p class="navbar-item">
                <Link to="/">Crypto Converter</Link>
              </p>
              
              <div class="navbar-item is-hoverable">
                <p>
                  <Link to="/Tracker">Crypto Tracker</Link>
                </p>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <p class="navbar-link">
                  More
                </p>

                <div class="navbar-dropdown">
                  <p class="navbar-item">
                    About
                  </p>
                  <p class="navbar-item">
                    Jobs
                  </p>
                  <p class="navbar-item">
                    Contact
                  </p>
                  <hr class="navbar-divider"/>
                </div>
              </div>
            </div>
          </div>
        </nav>
    )};
  
  export default NavBar;