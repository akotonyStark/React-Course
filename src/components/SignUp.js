import React, { useEffect, useRef } from 'react'

export default function SignUp() {
  const emailRef = useRef(null)
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const divContainer = useRef(null)

  const handleSignup = (e) => {
    e.preventDefault()

    //console.log(divContainer.current)
    const new_user = {
      id: new Date().getTime().toString(),
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    }
    console.log(new_user)
    localStorage.setItem('user', JSON.stringify(new_user))
    emailRef.current.value = ''
    usernameRef.current.value = ''
    passwordRef.current.value = ''
  }

  useEffect(() => {
    emailRef.current.focus()
  })

  return (
    <>
      <article ref={divContainer}>
        <form className='form' onSubmit={handleSignup}>
          <div className='form-control' style={{ marginTop: '50px' }}>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              ref={emailRef}
              placeholder='someone@somemail.com'
            />
          </div>
          <div className='form-control' style={{ marginTop: '20px' }}>
            <label htmlFor='username'>Username: </label>
            <input type='text' ref={usernameRef} placeholder='Username' />
          </div>
          <div className='form-control' style={{ marginTop: '20px' }}>
            <label htmlFor='password'>Password: </label>
            <input type='password' ref={passwordRef} placeholder='Password' />
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
