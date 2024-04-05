

function Index(){
    return(
        <>
        
        <div className={`container ${url == 'signup' ? 'sign-up-mode' : ''}`}>
     <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            </div>
            {error && <p style={{color:'red'}}>Field can't be empty</p>}
            <input type="submit" value="Login" class="btn solid" onClick={login}/>

            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" onChange={e=>setUserName(e.target.value)}/>
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            </div>
            <input type="submit" class="btn" value="sign up " onClick={register}/>
            {/* <p>{ user?.email}</p> */}
            <input type="submit class" className='btn' onClick={logout}  value="Logout"/>
            {error && <p style={{color:'red'}}>Field can't be empty</p>}

            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <Link to='/signup' className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </Link>
          </div>
          <img src={loginn} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <Link to='/signin' className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </Link>
          </div>
          <img src={register}className="image" alt="" />
        </div>
      </div>
    </div>
        </>
    )
}

export default Index;