import React from 'react';
// import FontAwesomeIcon from '@fortawesome/fontawesome-free'

const Footer = () => {
  return (
    <footer className="bg-black text-white   py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between md:flex-col md:w-full xs:w-atuo sm:w-auto gap-3">
          {/* Company Info */}
          <div className="mb-8 md:mb-0  max-w-[40vw] md:max-w-[100vw]  ">
            <h3 className="text-lg font-semibold">CAREKLOUD</h3>
            <p className="mt-2 ">
            This cost-effective CRM solution revolutionizes the game, Delivering value without compromising on its aim. With affordable pricing and scalable options to choose, Healthcare providers can efficiently put it to use. Implementation and maintenance costs kept low, Maximizing returns, making the investment glow. Streamlined workflows and automated processes, Save time and resources, resolving healthcare stresses.
            </p>
          </div>

          {/* Products */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold">PRODUCTS</h3>
            <div className="mt-2 flex flex-col">
              <span className="mb-2">Appointment</span>
              <span className="mb-2">Patient Managemnet</span>
              <span className="mb-2">Feedback</span>
              {/* <span className="mb-2">Laravel</span> */}
            </div>
          </div>

          {/* Useful Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold">USEFUL LINKS</h3>
            <div className="mt-2 flex flex-col">
              <span className="mb-2">About us</span>
              <span className="mb-2">Home</span>
              <span className="mb-2">Demo</span>
              <span className="mb-2">Help</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">CONTACT</h3>
            <div className="mt-2 flex flex-col">
              {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" />   */}
              <span className="mb-2">No 25/1 3rd cross pooja garden kalkere Bangalore 560043</span>
              <span className="mb-2">info@example.com</span>
              <span className="mb-2">+91-9972194928</span>
              {/* <span>+ 01 234 567 89</span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
