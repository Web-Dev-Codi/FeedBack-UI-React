function App() {
  const title = 'Blog Post';
  const body = ' This is awesome'
  const comments = [
    { id: 1, text: 'comment one' },
    { id: 2, text: 'comment two' },
    { id: 3, text: 'comment three' },
    { id: 4, text: 'comment four' },
    { id: 5, text: 'comment five' },
    { id: 6, text: 'comment six' }
  ]

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>

      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((id, index) => {
            return <li key={index}>{id.text}</li>;
          })}
        </ul>
      </div>
    </div>
  )
}

export default App;