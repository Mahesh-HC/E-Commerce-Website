import React from 'react'

const SignUp = () => {
  return (
    <>
      {/* Button trigger modal */}
      <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
        <span className="fa fa-user-plus me-1"></span>Register
      </button>

      {/* Modal */}
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign up With Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span> Sign up With Facebook
              </button>
              <form>
                <div className="mb-3">
                  <label for="exampleInput" className="form-label">User Name</label>
                  <input type="text" className="form-control" id="exampleInput" /> 
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-outline-primary w-100 mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp