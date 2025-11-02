
import Header from './Header.jsx';
import Logo from './Logo.jsx';
import List from './List.jsx';
import Main from './Main.jsx';
import Section from './Section.jsx';
import Box from './Box.jsx';
import Heading from './Heading.jsx';
import Paragraph from './Paragraph.jsx';
import Button from './Button.jsx';
import Image from './Image.jsx';


const App = () => {
  return (
    <>
      <Header>
        <Logo text='bikcraft' />
        <List />
      </Header>
      <Main background='bg-black'>
        <Section
          height='h-[37.5rem]'
          display='flex'
          gap='gap-[2.5rem]'
          color='text-white'
        >
          <Box
            width='w-[50%]'
            display='flex'
            direction='flex-col'
            justify='justify-center'
            height='h-[42.5rem]'
          >
            <Heading
              text='Custom-made bicycles just for you.'
              fontSize='text-[3.25rem]'
              fontWeight='font-[600]'
              margin='mb-[2rem]'
            />
            <Paragraph
              text='High-precision, high-quality electric bicycles, custom-made for you. Explore the world at your own pace with Bikcraft.'
              fontSize='text-[1.5rem]'
              color='text-[#B2B2B2]'
              margin='mb-[2rem]'
            />
            <Button 
              text='choose yours'
              transform='uppercase'
              width='w-fit'
              paddingTop='pt-[1rem]'
              paddingRight='pr-[2rem]'
              paddingBottom='pb-[1rem]'
              paddingLeft='pl-[2rem]'
              background='bg-[#FFBB00]'
              color='text-black'
              border='rounded-sm'
              fontSize='text-[1.25rem]'
              fontWeight='font-semibold'
              cursor='cursor-pointer'
              hover='hover:bg-yellow-custom-hover'
            />
          </Box>
          <Box
            width='w-[50%]'
          >
            <Image
              src='../../public/bike.jpg'
              width='w-full'
            />
          </Box>
        </Section>
      </Main>
    </>
  );
}

export default App;
