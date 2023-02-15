import { Container, Content, Footer, Image, Section } from "./styles";

const App = () => {
  return (
    <Container>
      <Section>
        <Content>
          <img src="yellowball.svg" alt="yellowball" />
          <form></form>
        </Content>
        <Image src="globe.svg" alt="globe" draggable={false} />
      </Section>
      <Footer>
        <img src="pinkball.svg" alt="pinkball" />
      </Footer>
    </Container>
  );
};

export default App;
