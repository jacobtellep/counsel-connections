import PrimaryLine from '@/components/PrimaryLine';
import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 600px;
    justify-content: center;
    row-gap: 20px;
    width: 100%;
`;

const Test = () => {
  return (
    <Container>
      <div>Test Page</div>
      <PrimaryLine isShort={true} />
      <PrimaryLine isShort={false} />
    </Container>
  );
};

export default Test;
