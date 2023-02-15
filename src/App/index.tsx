import { ChangeEvent, FormEvent, useState } from "react";
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
import { toast } from "react-toastify";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await axios
      .post("http://localhost:3000", data)
      .then(() => {
        setIsLoading(false);
        setData({
          name: "",
          email: "",
          message: "",
        });
        toast.success("Mensagem enviada com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.error);
        } else {
          toast.error(err.message);
        }
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  return (
    <Container>
      <Section>
        <Content>
          <img src="yellowball.svg" alt="yellowball" />
          <Form onSubmit={handleSubmit}>
            <H1>Reach out to us!</H1>
            <Input
              type="text"
              name="name"
              placeholder="Your name *"
              onChange={handleChange}
              value={data.name}
              minLength={4}
            />
            <Input
              type="email"
              name="email"
              placeholder="Your email *"
              onChange={handleChange}
              value={data.email}
              minLength={4}
            />
            <Textarea
              name="message"
              placeholder="Your message *"
              rows={10}
              draggable={false}
              onChange={handleChange}
              value={data.message}
              minLength={4}
            />
            <Button type="submit" disabled={isLoading}>
              "Send Message"
            </Button>
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
