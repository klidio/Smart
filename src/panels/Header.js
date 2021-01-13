const Header = (props) => {
  const menuItemStyle = {
    cursor: "pointer",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <span
          className="navbar-brand"
          style={menuItemStyle}
          onClick={() => props.changeActiveMenuItem("Home")}
        >
          Smart Farming
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <span
                className="nav-link"
                style={menuItemStyle}
                onClick={() => props.changeActiveMenuItem("Home")}
              >
                Home
              </span>
            </li>
            <li className="nav-item active">
              <span
                className="nav-link"
                style={menuItemStyle}
                onClick={() => props.changeActiveMenuItem("Members")}
              >
                Members
              </span>
            </li>
            <li className="nav-item active">
              <span
                className="nav-link"
                style={menuItemStyle}
                onClick={() => props.changeActiveMenuItem("ContactUs")}
              >
                Contact Us
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
