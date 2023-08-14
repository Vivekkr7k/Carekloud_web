import React from "react";
import LoginPageImg from "../Images/loginpage.png";
import RecptionDeskImg from '../Images/Receptiondesk.png'
import EmployeeDeskImg from '../Images/EmployeeDesk.png'
import DoctorDeskImg from '../Images/DoctorDesk.png'
import AdminDeskImg from '../Images/AdminDesk.png'
import Anitmatedtxt from "./Animatedtxt";
// import Footer from '../Components/Footer'
import Featurestwo from "./Featurestwo";
// import Plans from "./Plans";

const Features = () => {


  const RightFeatures = ({ title, img, desctiption }) => {
    return (
      <div className="flex  my-20 mx-[10%] max-w-[80vw] items-center justify-center  xs:max-w-[100vw] xs:mx-5 ">
        <div className="w-1/2 h-auto  border-4 border-black rounded-xl ">
          <img className="" src={img} alt="" />
        </div>
        <div className="w-1/2  xs:px-0 px-4 items-center justify-center flex">
          <div className="items-center flex justify-center flex-col md:pl-10">
            <h1 className="text-6xl font-semibold mb-4 text-black/75  sm:text-xl xs:w-auto md:text-2xl lg:text-4xl xl:text-5xl xs:pl-0  ">{title}</h1>
            {/* <p className="text-xl font-md text-black/70 xs:text-sm ">{desctiption}</p> */}
          </div>
        </div>
      </div>
    );
  };


  const LeftFeature =({title , img , desctiption})=>{
          return(
              <div className='flex  my-20 mx-[10%] max-w-[80vw] items-center justify-center  xs:max-w-[100vw] xs:mx-5  '>

              <div className='w-1/2  px-4 items-center justify-center flex'>
                  <div className='items-center flex justify-center flex-col'>
                  <h1 className='text-6xl font-semibold mb-4 text-black/75  sm:text-xl xs:text-xl md:text-2xl  lg:text-4xl xl:text-5xl'>{title}</h1>
                  {/* <p className='text-xl font-md text-black/70 xs:text-sm'>{desctiption}</p> */}
                </div>

              </div>
              <div className='w-1/2 h-auto  border-4 border-black rounded-xl'>
                  <img className='' src={img} alt="" />
              </div>
              </div>

          )
  }


  const SubscriptionPackage = () => {
    return (
      <>  
      <div id="Features">

     
     
      <div className="flex justify-center items-center bg-gray-100 py-12 mt-10 px-20" id="Features">
      <Anitmatedtxt text= "our plans " className='w-1/4  mx-10 font-bold'/>
       
        <div className="grid grid-cols-3 gap-8 max-w-6xl items-center justify-center mx-10 ">
          {/* Subscription Package 1 */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-2xl transition-all duration(400) ease-in-out ">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Basic</h2>
            <p className="text-black mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="text-black/90 mb-6">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Get Started</button>
          </div>
  
          {/* Subscription Package 2 */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-2xl transition-all duration(400) ease-in-out">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Standard</h2>
            <p className="text-black mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="text-black/75 mb-6">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-800 hover:text-dark hover:font-bold hover:shadow-lg shadow-md transition-all duration(400)  ease-in text-white py-2 px-4 rounded-full ">Get Started</button>
          </div>
  
          {/* Subscription Package 3 */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-2xl transition-all duration(400) ease-in">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Premium</h2>
            <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="text-gray-600 mb-6">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Get Started</button>
          </div>
        </div>
      </div>
      </div>
      </>
    );
  };  

  return (
    <>
    <div className="max-h-[100vh]" id="Features">
      <head className="text-7xl md:text-6xl flex  flex-col items center justify-center w-auto text-center mb-32 sm:text-5xl xs:text-4xl xs:mt-20 xs:font-semibold xl:text-8xl xs:mb-5 sm:font-bold  sm:mt-20 md:font-bold 2xl:text-8xl 2xl:font-bold">
        <h1 className="m-2 mb-3 ">
          {" "}
          <span className="text-orange-700">Simple</span>{" "}
          <span className="text-black/80">to use and </span>{" "}
        </h1>
        <h2>
          {" "}
          <span className="text-black/80">loaded with</span>{" "}
          <span className="text-orange-700">Feautres</span>{" "}
        </h2>
      </head>
      <section className="reltive">
        <RightFeatures
          className=""
          img={LoginPageImg}
          title="Login Page"
          desctiption="Gateway to Exceptional Care: Where Efficiency Meets Compassion!

          "
        />
     
      </section>
        <h1 className="flex text-center items-center justify-center text-8xl font-bold my-32 xs:text-5xl sm:text-6xl xs:justify-center xs:text-center ">What <span className="text-orange-700 ml-1">'</span>s there</h1>
      <section className="">
       <RightFeatures img={RecptionDeskImg}  title="Reseption Desk" 
      //  desctiption="lsjfsd"
        />
        <LeftFeature img={EmployeeDeskImg}  title="Employee Desk" 
        // desctiption="lsjfsd" 
        />
        <RightFeatures img={DoctorDeskImg}  title="Doctor Desk"
        //  desctiption="lsjfsd" 
         />
        <LeftFeature img={AdminDeskImg}  title="Admin Desk" 
        // desctiption="lsjfsd"
         />
      </section>
      <section>
        {/* <SubscriptionPackage/> */}
        {/* <Plans/> */}
        <Featurestwo/>
        {/* <Footer/> */}
      </section>
    </div>
    </>

  );
};

export default Features;
