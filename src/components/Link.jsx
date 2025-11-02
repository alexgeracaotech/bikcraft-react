
const Link = ({ text, anchor }) => {

   const style = `
    text-[1.25rem]
    font-semibold
    tracking-[0.05rem]
    uppercase
    hover:text-yellow-custom
    duration-150
  `;

  return <a className={style} href={anchor}>{text}</a>;
}

export default Link;
