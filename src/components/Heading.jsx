
const Heading = ({ text, fontSize, fontWeight, margin }) => {
  
  const style = `
    ${fontSize}
    ${fontWeight}
    ${margin}
  `;

  return <h1 className={style}>{text}</h1>;
}

export default Heading;
