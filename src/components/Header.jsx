
const Header = ({ children }) => {

  const style = `
    h-20
    px-50
    bg-black
    text-white
    flex
    justify-between
    items-center
  `;

  return <header className={style}>{children}</header>;
}

export default Header;
