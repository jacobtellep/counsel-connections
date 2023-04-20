import PropTypes from 'prop-types';
import Line from './HorizontalLine.styled';

const HorizontalLine = ({ height, width, list }) => {
  return <Line height={height} width={width} list={list} />;
};

HorizontalLine.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  list: PropTypes.bool,
};

Line.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  list: PropTypes.bool,
};

export default HorizontalLine;
