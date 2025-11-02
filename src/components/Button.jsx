
const Button = ({
  text, transform, width, paddingTop, paddingRight, paddingBottom, paddingLeft, background, color, border, fontSize, fontWeight, cursor, hover
}) => {

  const style = `
    ${width}
    ${transform}
    ${paddingTop}
    ${paddingRight}
    ${paddingBottom}
    ${paddingLeft}
    ${background}
    ${color}
    ${border}
    ${fontSize}
    ${fontWeight}
    ${cursor}
    ${hover}
  `;

  return <button className={style}>{text}</button>;
}

export default Button;
