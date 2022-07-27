import './site.css'

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
          <label>Password<input type='password' name='password'></input></label>
          <button type='submit'>Submit</button>

        </form>
      </main>

      <footer>
        <p>Website Created by Christian Isaman for CSCI S-12 using ReactJS</p>
      </footer>

    </div>
  );
}

export default App;
