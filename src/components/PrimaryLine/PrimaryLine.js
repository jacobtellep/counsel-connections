import Line from './PrimaryLine.styled';

const Timeline = ({ isShort = false }) => {
  return <Line short={isShort} />;
};

export default Timeline;
