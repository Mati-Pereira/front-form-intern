import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  min-height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-grow: 5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  > img {
    position: absolute;
    min-width: 10rem;
    height: 10rem;
    top: 0;
    left: 0;
  }
`;

export const Image = styled.img`
  display: flex;
  flex-grow: 1;
  margin-right: -8rem;
  margin-top: -20rem;
  object-fit: contain;
  width: max-content;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_100};
  display: flex;
  height: 13rem;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
    img:first-child {
      display: none;
    }
    height: 10rem;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icons = styled.span`
  margin: 0 1rem;
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.gray_500};
  @media (max-width: 500px) {
    margin: 0 3rem;
  }
`;

export const Green = styled.img`
  position: absolute;
  right: 10rem;
  top: 0;
  @media (max-width: 500px) {
    right: 5rem;
  }
`;

export const Yellow = styled.img`
  position: absolute;
  right: -1.875rem;
  @media (max-width: 500px) {
    right: -2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  max-width: 600px;
  min-width: 500px;
  height: 75vh;
  z-index: 1;
  @media (max-width: 500px) {
    margin: 2rem auto;
    min-width: 80%;
  }
  @media (min-width: 500px) and (max-width: 1000px) {
    height: 100%;
    margin: 2rem auto;
  }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  border-radius: 0.5rem;
  width: 80%;
  max-width: 30rem;
  padding: 1.875rem 2.875rem;
  outline: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.125rem;
`;

export const Textarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  border-radius: 0.5rem;
  width: 80%;
  max-width: 30rem;
  padding: 1.875rem 2.875rem;
  outline: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.125rem;
  font-family: "Apercu Arabic Pro";
  resize: none;
`;

export const H1 = styled.h1`
  text-align: left;
  width: 100%;
  max-width: 30rem;
  font-family: "Apercu Arabic Pro";
  font-weight: 400;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.gray_700};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 3.25rem;
  height: 5rem;
  font-family: "Apercu Arabic Pro";
  font-size: 1.125rem;
  border: none;
  border-radius: 50px;
  margin-right: auto;
  cursor: pointer;
`;
