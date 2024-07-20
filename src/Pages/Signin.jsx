import React from 'react'

const Signin = () => {
  return (
    <>
     <div class="container">
        <div class="signin-form">
            <h1 class="title">Sign In</h1>
            <form action="#">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <button type="submit" class="btn">Sign In</button>
            </form>
            <p class="signup-link">Don't have an account? <a href="#">Sign Up</a></p>
        </div>
    </div>
    </>
  )
}

export default Signin