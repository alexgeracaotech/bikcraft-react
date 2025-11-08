
import Header from './Header.jsx';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import List from './List.jsx';
import Item from './Item.jsx';
import Link from './Link.jsx';

const App = () => {
  return (
    <>
      <Header
        corFundo='bg-black'
        corFonte='text-white'
        altura='h-[6rem]'
        preenchimento='px-50'
      >
        <Logo
          texto='bikcraft'
          tamanhoFonte='text-5xl'
          pesoFonte='font-black'
          caixaFonte='uppercase'
          espacamentoFonte='tracking-[0.5rem]'
        />
        <Navigation>
          <List>
            <Item>
              <Link
                texto='modelos'
                referencia='#'
              />
            </Item>
          </List>
        </Navigation>
      </Header>
    </>
  );
}

export default App;
