
const Paragraph = ({ text, fontSize, margin, color }) => {

  const style = `
    ${fontSize}
    ${color}
    ${margin}
  `;

  return <p className={style}>{text}</p>;
}

export default Paragraph;
