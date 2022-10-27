import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-primary fw-bold mb-4">About Us</h1>
              <p className="lead mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis recusandae ad sequi nemo quia officiis cupiditate nisi neque consequuntur tempore odit porro hic quos, assumenda repellendus. Exercitationem, quod maxime impedit qui sunt ea beatae ut error quidem sequi aut animi illum tempore labore repellendus voluptatibus nesciunt quasi eos ducimus magni dolores? Temporibus libero culpa consequatur quia quisquam sit praesentium magnam modi voluptatum minima impedit distinctio tenetur labore, atque suscipit esse. Tenetur voluptatem enim numquam quaerat recusandae nesciunt alias distinctio! A quo magnam consequuntur sequi fugiat natus molestias iste incidunt rerum amet obcaecati quae soluta ex nisi ratione totam, voluptas beatae illum laborum qui assumenda adipisci doloremque ipsum. Repudiandae in laudantium temporibus natus provident, beatae delectus quisquam commodi similique praesentium fuga.</p>
              <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src="/assets/about.jpg" alt="About Us" height="400px" width="400px" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default About