import { useEffect, useState } from 'react';
import { Theme, GlobalStyle } from '../styles';
import { About } from './About';
import { Container } from './Container';
import { Hero } from './Hero';
import { BanerAbout } from './BanerAbout';
import { MindMap } from './MindMap/MindMap';
import { Faq } from './Faq/Faq';
import { Collection } from './Collection/Collection';
import { ContactUs } from './ContactUs';
import { Footer } from './Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (width > 768) {
        setMenu(false);
      }
    };
  }, [setMenu, width]);

  return (
    <>
      <Theme>
        <Hero menu={menu} setMenu={setMenu} width={width} />
        {(!menu || (width > 768 && menu)) && (
          <>
            <Container>
              <About width={width} />
            </Container>
            <BanerAbout />
            <Container>
              <MindMap width={width} />
              <Faq width={width} />
              <Collection width={width} />
              <ContactUs />
              <Footer />
            </Container>
          </>
        )}
        <GlobalStyle />
      </Theme>
      <ToastContainer autoClose={3000} theme="dark" position="top-right" />
    </>
  );
}

export default App;
