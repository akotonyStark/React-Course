const Login = () => {
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='username'>Username: </label>
            <input type='text' id='username' name='username' />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' name='password' />
          </div>

          <button type='submit'>Login</button>
        </form>
      </article>
    </>
  )
}

export default Login
