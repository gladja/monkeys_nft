import { useEffect, useState } from 'react';
import { Theme, GlobalStyle } from '../styles';
import { About } from './About';
import { Container } from './Container';
import { Hero } from './Hero';
import { BanerAbout } from './BanerAbout';

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
          </>
        )}
        <GlobalStyle />
      </Theme>
    </>
  );
}

export default App;
