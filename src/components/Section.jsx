
const Section = ({ children, height, display, gap, color }) => {
  
  const style = `
    ${height}
    ${display}
    ${gap}
    ${color}
  `;

  return <section className={style}>{children}</section>
}

export default Section;
