import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Yes anyone can code',
      rating: 10
    },
    {
      id: 2,
      text: 'Take the time to improve yourself',
      rating: 9
    },
    {
      id: 3,
      text: 'Stop at nothing',
      rating: 8
    }
  ])

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete my good friend?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }

  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }


  return <FeedbackContext.Provider
    value={{
      feedback,
      deleteFeedback,
      addFeedback,
    }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;