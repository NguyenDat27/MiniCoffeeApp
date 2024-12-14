import PropTypes from 'prop-types'
import { Box } from 'zmp-ui'

const Divider = ({ size = 8, className, ...props}) => {
  return (
    <Box
        style={{
            minHeight: size,
            backgroundColor: "#f4f5f6",
        }}
        className = {className}
        {...props}
    />
  )
}

export default Divider

Divider.propTypes = {
    size: PropTypes.number,
    className: PropTypes.string,
};
