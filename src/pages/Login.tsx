import '../assets/css/login.css'
export const Login = () => {
  return (
    <div className="box-full-sign">
      <div className="box-left">
        <a href="home.html" className="icon-back"> Back to Home</a>
      </div>
      <div className="box-right">
        <div className="box-form">
          <a href="home.html" className="logo">The Alchemist</a>
          <h1 className="title">Sign In</h1>
          <ul className="form">
            <li>
              <label className="label">Email</label>
              <input className="input erro" placeholder="Please enter your email" type="text"  />
              <p className="text-erro">Incorrect email</p>
            </li>
            <li>
              <label className="label">Password</label>
              <div className="pass">
                <input className="input erro" placeholder="Please enter your email" type="password" />
                <span className="view-pass"></span>
              </div>
              <span className="text-erro pull-left">Incorrect password</span>
              <a href="#" className="forgot">Forgot password?</a>
            </li>
            <li>
              <button className="btn-button">Sign In</button>
            </li>
          </ul>
          <p className="text-des">Don't have an account? <a href="Sign-up.html">Sign Up</a></p>
          <div className="box-line">
            <span>Or</span>
          </div>
          <div className="box-network">
            <p className="des">Continue with another account</p>
            <a href="#" className="icon google">google</a>
            <a href="#" className="icon fb">facebook</a>
            <a href="#" className="icon wt">twitter</a>

          </div>
        </div>
      </div>
    </div>
  );
};
