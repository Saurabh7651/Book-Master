import React from 'react';


const Contact = () => {
  return (
  <>
     
     <footer className="footer">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out if you have any questions or inquiries.
          </p>
          <div className="details">
            <p><strong>Email:</strong> sauurabhp.8382@gmail.com</p>
            <p><strong>Phone:</strong> +91 7651951514</p>
            <p><strong>Address:</strong> Jasper Hostel, IIT(ISM) Dhanbad, Jharkhand</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    name="message"
                   
                    ></textarea>
        </div>
      </div>
      <div className="footer-bar">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </>
  );
};

export default Contact;
