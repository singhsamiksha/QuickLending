import * as React from "react";
import "./Page4.css"; // Import the CSS file

function Page4() {
  return (
    <div className="page4-container">
      <div className="page4-left">
        <p>Testimonial</p>
        <h1>What <span style={{color: " rgb(67, 81, 151)"}}>People Think</span> of Us</h1>
        <hr className="page4-divider" />
        <p className="page4-left-description">
          Lorem ipsum dolor sit amet consectetur. Sodales risus suspendisse ullamcorper etiam vel mi eleifend nisi.
        </p>
      </div>
      <div className="page4-image">
        <img src="https://media.istockphoto.com/id/1494508936/photo/happy-excited-and-phone-with-black-woman-in-studio-for-text-message-notification-and-social.jpg?s=612x612&w=0&k=20&c=9h-m2tus81J0dKxb81KEEXDy1Xoo84mZ7bjVGwDjEro=" style={{borderRadius : "5px"}} />
      </div>
      <div className="page4-right">
        <p>
          “James and his team are my go-to source for any transaction we are considering. They are courteous, efficient
          and quick to get you to the closing table.”
        </p>
        <div className="page4-testimonial">
          <h4>Linda</h4>
          <p>⭐⭐⭐⭐⭐</p> {/* Placeholder for stars */}
        </div>
      </div>
    </div>
  );
}

export default Page4;
