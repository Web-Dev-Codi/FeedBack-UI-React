import React from 'react';
import { Card } from "./shared/Card"
import PropTypes from 'prop-types'

function Feedbackitem({ item }) {

  // const handleClick = () => {
  //   setRating(() => {
  //     return 100;
  //   })
  // }



  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click Me</button> */}
    </Card>
  )
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Feedbackitem