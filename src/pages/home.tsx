import styled from "styled-components";

const Home = () => {
  return <StyledHome>Selamat datang!</StyledHome>;
};

const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 112px;
  height: calc(100vh - 112px);
  font-size: 24px;
`;

export default Home;
