import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import {
  Button,
  Container,
  Content,
  Footer,
  Form,
  Green,
  H1,
  Icons,
  Image,
  Input,
  Section,
  Textarea,
  Yellow,
} from "./styles";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

const App = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log("data", data);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Section>
        <Content>
          <img src="yellowball.svg" alt="yellowball" />
          <Form>
            <H1>Reach out to us!</H1>
            <Input
              type="text"
              name="name"
              placeholder="Your name *"
              onChange={handleChange}
              minLength={4}
            />
            <Input
              type="email"
              name="email"
              placeholder="Your email *"
              onChange={handleChange}
              minLength={4}
            />
            <Textarea
              name="message"
              placeholder="Your message *"
              rows={10}
              draggable={false}
              onChange={handleChange}
              minLength={4}
            />
            <Button type="submit">Send Message</Button>
          </Form>
        </Content>
        <Image src="globe.svg" alt="globe" draggable={false} />
      </Section>
      <Footer>
        <img src="pinkball.svg" alt="pinkball" />
        <Icons>
          <FaLinkedinIn />
          <FaTwitter />
          <FaFacebookF />
          <FaPinterestP />
        </Icons>
        <Green src="greenball.svg" alt="greenball" />
        <Yellow src="yellowball.svg" alt="yellowball" />
      </Footer>
    </Container>
  );
};

export default App;
