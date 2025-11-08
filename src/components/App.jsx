
import Header from './Header.jsx';
import Logo from './Logo.jsx';

const App = () => {
  return (
    <>
      <Header
        corFundo='bg-black'
        corFonte='text-white'
        altura='h-[6rem]'
      >
        <Logo
          texto='bikcraft'
          tamanhoFonte='text-5xl'
          pesoFonte='font-bold'
        />
      </Header>
    </>
  );
}

export default App;
