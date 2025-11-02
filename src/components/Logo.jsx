
const Logo = ({ text }) => {

  const style = `
    text-[3rem]
    font-black
    tracking-[0.5rem]
    uppercase
  `;

  return <span className={style}>{text}</span>;
}

export default Logo;
