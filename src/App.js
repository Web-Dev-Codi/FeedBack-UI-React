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
  ];


  const loading = false;
  const showComments = false;

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>

      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((id, index) => {
            return <ul key={index}><li>{id.text}</li></ul>;
          })}
        </ul>
      </div>
    </div>
  )
}

export default App;