const Login = () => {
  const handleSubmit = (e) => {
    //preventDefaults prevents the page from auto refresh on submit
    e.preventDefault()
    console.log('hello world')
  }

  return (
    <>
      <article style={{ textAlign: 'center' }}>
        <form className='form' onSubmit={handleSubmit}>
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
