import React, { useState } from 'react'
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const{ register,handleSubmit, errors} = useForm();
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_fdOOk6qJk0tHX9xRJrUBi";


    const onSubmit = (data, r) => {
        sendEmail(
          serviceID,
          templateID,
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
          },
          userID
        )
        r.target.reset();
      }

    const sendEmail = (e) =>{
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
         .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div className="contacts">
        <div className="text-center">
            <h1>contact me</h1>
             <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
             <span className="success-message">{successMessage}</span>
        </div>
        <div className="container">
        <form onSubmit={sendEmail}>
         <div className="row">
         <div className="col-md-6 col-xs-12">
           {/* NAME INPUT */}
           <div className="text-center">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                />
           <div className="line"></div>
         </div>
          {/* PHONE INPUT */}
          <div className="text-center">
            <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                />
          <div className="line"></div>
        </div>
            {/* EMAIL INPUT */}
            <div className="text-center">
                <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                />
            <div className="line"></div>
          </div>
           {/* SUBJECT INPUT */}
           <div className="text-center">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                />
           <div className="line"></div>
         </div>
         </div>
            <div className="col-md-6 col-xs-12">
            {/* DESCRIPTION */}
            <div className="text-center">
                <textarea
                type="text"
                className="form-control"
                placeholder="Please describe shortly you project..."
                name="description"></textarea>
              <div className="line"></div>
            </div>
                    <button className="btn-main-offer contact-btn" type="submit">contact me</button>
            </div>
         </div>
         </form>
        </div>
        </div>
    )
}

export default Contacts
