import {
  Container,
  Content,
  Footer,
  Green,
  Icons,
  Image,
  Section,
  Yellow,
} from "./styles";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

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
        <div>
          <img src="pinkball.svg" alt="pinkball" />
          <Icons>
            <FaLinkedinIn />
            <FaTwitter />
            <FaFacebookF />
            <FaPinterestP />
          </Icons>
          <Green src="greenball.svg" alt="greenball" />
          <Yellow src="yellowball.svg" alt="yellowball" />
        </div>
      </Footer>
    </Container>
  );
};

export default App;
