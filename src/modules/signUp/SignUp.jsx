import SignInForm from './Form/Form';
import "./signUp.scss"

const SignIn = () => {

  return (
    <div className='auth-form-container'>
      {/* <div className='left'>
        <h1>Welcome to TechToner</h1>
      </div> */}
      <div className='right' >
        <div className='form-header'>
          <h1>Signup</h1>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;