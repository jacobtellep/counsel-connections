import Line from './PrimaryLine.styled';

const PrimaryLine = ({ isShort = false }) => {
  return <Line short={isShort} />;
};

export default PrimaryLine;
