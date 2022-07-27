import './site.css'
import * as yup from 'yup';
import {userSchema} from './validations/user-validation'

function App() {

  const createUser = (event) => {
    event.preventDefault()
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value
    };
    console.log(formData);
  }

  return (
    <div className="App">

      <header>
        <h1>JS Form Validation</h1>
      </header>

      <main>
        <form action='https://cs12.net/form/submit.php' method='post' onSubmit={createUser}>

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
