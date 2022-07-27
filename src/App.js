import './site.css'

function App() {

  return (
    <div className="App">

      <header>
        <h1>JS Form Validation</h1>
      </header>

      <main>
        <form action='https://cs12.net/form/submit.php' method='post'>

          <label>First Name<input type='text' name='firstName'></input></label>
          <label>Last Name<input type='text' name='lastName'></input></label>
          <label>Email<input type='email' name='email'></input></label>
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
