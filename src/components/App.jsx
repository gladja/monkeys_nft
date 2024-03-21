import { Theme, GlobalStyle } from '../styles';
import { Container } from './Container';
import { Hero } from './Hero';

function App() {
  return (
    <>
      <Theme>
        <Hero />
        <Container>
          <h1>Hi</h1>
        </Container>
        <GlobalStyle />
      </Theme>
    </>
  );
}

export default App;
