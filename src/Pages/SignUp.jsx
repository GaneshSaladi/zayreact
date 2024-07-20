import React from 'react'

const SignUp = () => {
  return (
    <>
      <div class="container">
        <div class="signup-form">
            <h1 class="title">Sign Up</h1>
            <form action="#">
                <div class="input-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <div class="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required/>
                </div>
                <button type="submit" class="btn">Sign Up</button>
            </form>
            <p class="signin-link">Already have an account? <a href="#">Sign In</a></p>
        </div>
    </div>
    </>
  )
}

export default SignUp