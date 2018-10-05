import React from 'react';

class SignUp extends Component{
  render(){
    return(
      <div callName='form-inline'>
        <h2>Sign Up</h2>
        <div callName='from-group'>
          <input
            className='form-control'
              type='text'
              placeholder='email'
             />
           <input
             className='form-control'
             type='password'
             placeholder='password'
             />
           <button
             className='btn btn-primary'
             type='button'
             > 
             Sign Up
           </button>
        </div>
      </div>
    )
  }
}

export default SignUp;
