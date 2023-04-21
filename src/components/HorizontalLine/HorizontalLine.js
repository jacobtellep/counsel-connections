import PropTypes from 'prop-types';
import Line from './HorizontalLine.styled';

const HorizontalLine = ({ height, width, list }) => {
  return <Line height={height} width={width} isList={list} />;
};

HorizontalLine.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  list: PropTypes.bool,
};

export default HorizontalLine;
