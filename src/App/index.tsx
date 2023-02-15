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
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

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
    await fetch(process.env.BACKEND_URL ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setIsLoading(false);
        setData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Ocorreu um erro ao enviar sua mensagem!");
        console.log(err);
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
