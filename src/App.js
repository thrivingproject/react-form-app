import './site.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(7).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

function App() {

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    alert('Data is valid')
    console.log(data)
  }

  return (
    <div className="App">

      <header>
        <nav><a href='../index.html'>Home</a></nav>
        <h1>JS Form Validation</h1>
      </header>

      <main>

        <form onSubmit={handleSubmit(onSubmit)}>

          <label>
            Email
            <input {...register('email')} type='email'/>
            <p>{errors.email?.message}</p>
          </label>

          <label>
            Password
            <input {...register('password')} type='password'/>
            <p>{errors.password?.message}</p>
          </label>

          <label>
            Confirm Password
            <input {...register('confirmPassword')} type='password'/>
            <p>{errors.confirmPassword && 'Your passwords do not match.'}</p>
          </label>

          <button type='submit'>Sign-up</button>

        </form>

      </main>

      <footer>
        <p>Website Created by Christian Isaman for CSCI S-12 using <a href='https://reactjs.org/'>React</a>, <a href='https://react-hook-form.com/'>React Hook Form</a>, and <a href='https://github.com/jquense/yup'>Yup</a></p>
      </footer>

    </div>
  );
}

export default App;
