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
  > form {
    background-color: red;
    width: 400px;
    height: 300px;
  }
  > img {
    width: 10rem;
    height: 10rem;
  }
`;

export const Image = styled.img`
  display: flex;
  flex-grow: 1;
  margin-right: -10rem;
  margin-top: -15rem;
  object-fit: contain;
  width: 50%;
  height: 100%;
  background-color: red;
`;

export const Footer = styled.footer`
  display: flex;
  position: relative;
  > img {
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icons = styled.span``;
