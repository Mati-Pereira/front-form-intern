import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 100vh;
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
`;

export const Footer = styled.footer`
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_100};
  > div {
    display: flex;
    height: 15rem;
    align-items: center;
    img {
    }
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
`;

export const Green = styled.img`
  position: absolute;
  right: 10rem;
  top: 0;
`;

export const Yellow = styled.img`
  position: absolute;
  right: -1.875rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 70%;
  height: 75vh;
  z-index: 1;
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
