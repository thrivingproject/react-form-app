function App() {
  return (
    <div className="App">
      <header>
        <h1>JS Form Validation</h1>
      </header>
      <main>
        <form action='https://cs12.net/form/submit.php' method='post'>
          <label>Name<input type='text' name='name'></input></label>
          <label>Email<input type='email' name='email'></input></label>
          <label>Feedback<textarea name='feedback' cols='30' rows='10'></textarea></label>
          <button type='submit'>Submit</button>
        </form>
      </main>
      <footer><p>Website Created by Christian Isaman for CSCI S-12 using React</p></footer>
    </div>
  );
}

export default App;
