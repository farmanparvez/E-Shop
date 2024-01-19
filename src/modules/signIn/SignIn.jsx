import SignUpForm from './Form/Form';
import "../signUp/signUp.scss"

const Signin = () => {
  return (
    <div className='auth-form-container'>
      {/* <div className='left'>
        <h1>Welcome to TechToner</h1>
      </div> */}
      <div className='right' >
        <div className='form-header'>
          <h1>Signin</h1>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}

export default Signin