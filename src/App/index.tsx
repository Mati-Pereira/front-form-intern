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
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { postForm } from "../redux/formSlice";

const App = () => {
  const { loading } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const {
    colors: { white },
  } = useTheme();
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
    dispatch(postForm(data));
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
            <Button type="submit" disabled={loading}>
              {loading ? (
                <ThreeDots
                  color={white}
                  wrapperStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                />
              ) : (
                "Send Message"
              )}
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
