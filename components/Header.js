const Header = (props) => {
  const nav = props.header.nav_menu.map((item, index) => (
    <a href={item.link.href} key={index}>
      {item.link.title}
    </a>
  ));

  return (
    <header>
        <a className="logo" href="/">
          <span className="logoText">
            <i className="fa fa-file-code-o" aria-hidden="true" />
            <span className="logoTitle">{props.header.logo_title}</span>
          </span>
        </a>
        <nav className="navMenu">{nav}</nav>
      </header>
  );
}

export default Header;