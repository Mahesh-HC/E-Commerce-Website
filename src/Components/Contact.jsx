import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4">
            <h1 className="text-primary fw-bold mb-4">Have Some Questions ?</h1>
            <hr></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-glex justify-content-center">
            <img src="/assets/contact.png" alt="contact" height="350px" width="350px" />
          </div>
          <div className="col-md-6 ">
            <form>
              <div className="mb-3">
                <label for="exampleForm" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleForm" placeholder="Enter Your Name"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example Textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact