import React from 'react'
import Feedbackitem from './FeedbackItem'
import PropTypes from 'prop-types'

export function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>{feedback.map((item) => (
      <Feedbackitem key={item.id} item={item} />
    ))}
    </div>
  )
}

FeedbackList.propTypes = {
  Feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}
