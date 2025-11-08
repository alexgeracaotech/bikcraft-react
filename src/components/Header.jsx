
const Header = ({ children, corFundo, corFonte, altura }) => {

  const style = `
    ${corFundo}
    ${corFonte}
    ${altura}
  `;

  return <header className={style}>{children}</header>;
}

export default Header;
