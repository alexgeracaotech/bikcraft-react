
const Main = ({ children, background }) => {

  const style = `
    ${background}
    px-50
  `;

  return <main className={style}>{children}</main>;
}

export default Main;
