import '../../App.css';


const SignUpForm = () => {
  return (
    <div className='form-content-right'>
      <form className='form'>
      <div className='form-inputs'>
          <label for="fullname" className='form-label'>Full Name</label>
          <input
            id="fullname"
            className='form-input'
            type='text'
            name='fullname'
            placeholder='Enter your username'
          />
        </div>
        <div className='form-inputs'>
          <label for="username" className='form-label'>Username</label>
          <input
            id="username"
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
          />
        </div>
        <div className='form-inputs'>
          <label for="email" className='form-label'>Email</label>
          <input
            id="email"
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
          />
        </div>
        <div className='form-inputs'>
          <label for="password" className='form-label'>Password</label>
          <input
            id="password"
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
          />
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>);
};

export default SignUpForm;
