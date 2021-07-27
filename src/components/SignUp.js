export default function SignUp() {
  const handleSignup = (e) => {
    console.log(e)
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSignup}>
          <div className='form-control' style={{ marginTop: '50px' }}>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='someone@somemail.com'
              // value={username}
              value=''
              //onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='form-control' style={{ marginTop: '20px' }}>
            <label htmlFor='username'>Username: </label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Username'
              // value={username}
              value=''
              //onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='form-control' style={{ marginTop: '20px' }}>
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              // value={password}
              value=''
              //onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className='onlyMeButt'
            type='submit'
            style={{ marginTop: '50px' }}
          >
            Signup
          </button>
        </form>
      </article>
    </>
  )
}
