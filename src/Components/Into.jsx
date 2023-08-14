import React from 'react'
import HomepageImg from '../Images/Homepage_img.png'
import Anitmatedtxt from './Animatedtxt'
import zipFile from '../crm/Carekloud_ v-1.0.rar'

const Into = () => {
  function downloadZip() {
    const link = document.createElement('a');
    link.href = zipFile;
    link.download = 'Carekloud_ v-1.0.rar';
    link.click();
  }
  return (
    <>
    <div className='max-w-[90vw]  m-[7vw] ' id='Intro'>

   
    <div className='flex m-2 mt-20 md:flex-col sm:flex-col xs:flex-col md:w-full xs:w-full sm:w-full '>
       <div className='left w-1/2 h-70vh md:w-full'>
        <h1 className=' text-5xl   sm:text-4xl xs:text-2xl font-extrabold flex flex-col items-center justify-center capitalize p-3 sm:p-0 xl:text-3xl md:text-5xl '>Elevate Patient Care</h1> 
        <Anitmatedtxt className='text-orange-500 lg:text-3xl xl:text-4xl sm:text-2xl' text="with"> </Anitmatedtxt> 
         <Anitmatedtxt text="Carekloud " className='text-orange-700 ml-4   xl:text-7xl lg:text-5xl '> 
          </Anitmatedtxt> 
         
        <p className='mx-10 my-5 p-6 text-xl text-black/75 font-semibold lg:text-md lg:w-auto  lg:my-2 xs:text-base sm:text-medium '>Unlock the power of comprehensive patient management and streamline your healthcare workflows with Carekloud CRM, transforming your hospital into a hub of efficient and compassionate care.</p>
        
        
       </div>
       <div className='right w-1/2 h-70vh lg:h-auto rounded-xl border-4 border-black  shadow-stone-600 shadow-xl border-solid flex items-center justify-center p-4 md:w-full md:h-auto  xl:p-2 xl:m-auto  2xl:p-2 2xl:m-auto lg:p-2 lg:m-auto  '>
         <img className='h-auto' src={HomepageImg} alt="" />
       </div>
      
    </div>
     <div className='sm:p-10 md:p-10 '>
     <button className='m-5 mt-10  w-1/4 mx-20 h-20 text-xl text-white font-bold  items-center flex hover:shadow-xl shadow-lg hover:text-blue-700 hover:bg-white  hover:shadow-blue-600  shadow-slate-700 justify-center bg-blue-800 rounded-lg transition-all duration-300 ease-in-out md:w-full md:m-0  sm:w-full xs:w-full xs:p-0 xs:mx-2 sm:mx-2.5 sm:mt-10    xs:justify-center' onClick={downloadZip}>Get a demo</button>
    </div>
    </div>
    </>
   
    
  )
}

export default Into
