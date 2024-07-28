import React , {useState} from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const [color , setColor] = useState('black');
  const [backgroundColor , setBackgroundColor] = useState('white');
  const changeTheme = (newBackgroundColor, newColor)=>{
    setBackgroundColor(newBackgroundColor);
    setColor(newColor);
    document.body.style.backgroundColor = newBackgroundColor;
    document.body.style.color = newColor;
  }
  const colors = ['red', 'green' , 'blue'];
  const themeColorStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '5px',
    backgroundColor: 'red',
    border:'1px solid white',
    listStyle:'none',
    margin:'0 10px',
    cursor:'pointer',
  }
  const flex = {
    display:'flex',
    justifyContent:'center',
    marginBottom:'0px',
  }
  const alignitems = {
    alignItems:'center',
    display:'flex',
  }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid" style={alignitems}>
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
          <ul style={flex}>
            {colors.map((color, index) => (
              <li key={index} style={{ ...themeColorStyle, backgroundColor: color }} onClick={() => changeTheme(color, color === 'blue' ? 'white' : 'black')}/>
            ))}
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = { title: "Set Title here", about: "Set About Text here" };
