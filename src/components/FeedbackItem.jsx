import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { Card } from "./shared/Card";
import PropTypes from 'prop-types'

function Feedbackitem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click Me</button> */}
    </Card>
  )
};

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Feedbackitem;