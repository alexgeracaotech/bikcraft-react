
const Image = ({ src, width }) => {

  const style = `
    ${width}
  `;

  return <img className={style} src={src} />
}

export default Image;
