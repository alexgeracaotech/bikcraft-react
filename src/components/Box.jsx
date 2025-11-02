
const Box = ({ children, width, height, display, direction, justify }) => {

  const style = `
    ${width}
    ${display}
    ${direction}
    ${justify}
    ${height}
  `;

  return <div className={style}>{children}</div>;
}

export default Box;
