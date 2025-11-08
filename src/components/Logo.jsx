
const Logo = ({ texto, tamanhoFonte, pesoFonte }) => {

  const style = `
    ${tamanhoFonte}
    ${pesoFonte}
  `;

  return <span className={style}>{texto}</span>;
}

export default Logo;
