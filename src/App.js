import './site.css'
import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  /* This does not work, need to figure out how to post data to endpoint */
  const onSubmit = (data) => {
    fetch('https://cs12.net/form/submit.php', {
      method: 'POST',
      body: data
    })
  }

  return (
    <div className="App">

      <header>
        <h1>JS Form Validation</h1>
      </header>

      <main>

        <form onSubmit={handleSubmit(onSubmit)}>

          <label>
            First Name
            <input {...register('firstName', {required: 'This is required'})} type='text'/>
            <p>{errors.firstName?.message}</p>
          </label>

          <label>
            Last Name
            <input {...register('lastName', {required: 'This is required'})} type='text'/>
            <p>{errors.lastName?.message}</p>
          </label>

          <label>
            Email
            <input {...register('email', {required: 'This is required'})} type='email'/>
            <p>{errors.email?.message}</p>
          </label>

          {/* <button type='submit'>Submit</button> */}
          <input type='submit'/>

        </form>

      </main>

      <footer>
        <p>Website Created by Christian Isaman for CSCI S-12 using ReactJS</p>
      </footer>

    </div>
  );
}

export default App;
