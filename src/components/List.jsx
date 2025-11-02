
import Link from "./Link.jsx";

const List = () => {

  const style = `
    flex
    gap-12.5
  `;

  return (
    <>
      <ul className={style}>
        <li>
          <Link
            text='models'
            anchor='#'
          />
        </li>
        <li>
          <Link
            text='contact'
            anchor='#'
          />
        </li>
        <li>
          <Link
            text='about'
            anchor='#'
          />
        </li>
      </ul>
    </>
  );
}

export default List;
