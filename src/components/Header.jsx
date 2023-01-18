import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <span>React</span>
      <span>typescript</span>
    </Head>
  );
};

const Head = styled.div`
  width: 1200px;
  min-width: 800px;
  height: 70px;
  border: 4px solid yellowgreen;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 10px;
  font-size: 20px;
`;

export default Header;
