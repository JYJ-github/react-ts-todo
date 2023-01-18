import styled from "styled-components";
import Header from "./components/Header";

const App = () => {
  return (
    <Body>
      <Header />
    </Body>
  );
};

export default App;

const Body = styled.div`
  display: flex;
  justify-content: center;
`;
