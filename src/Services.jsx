import React  from 'react';

import web from "../src/images/s1.jpg";
import app from "../src/images/app.jpeg";
import android from "../src/images/android.jpeg";
import digital from "../src/images/digital.jpeg";
import marketing from "../src/images/marketing.jpg";
import software from "../src/images/software.jpeg";



const Services = () => {
    const Sdata = [
        {
          imgsrc: web,
          title: "Web development",
        },
        {
          imgsrc: app,
          title: "App development",
        },
        {
          imgsrc: software,
          title: "Software development",
        },
        {
          imgsrc: digital,
          title: "Digital Marketing",
        },
        {
          imgsrc: android,
          title: "Android development",
        },
        {
          imgsrc: marketing,
          title: "Marketing",
        },
      ];
      

  return (
    <>
   <div className='my-5'>
       <h1 className='text-center'> Our Services</h1>
     </div>
     <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                {
                  Sdata.map((val)=>{
                    return(
                    <>
                    <div className='col-md-4 col-10 mx-auto my-2'>
                    <div className="card">
  <img src={val.imgsrc} className="card-img-top" alt={val.imgsrc} />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{val.title} </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary">Stay Tuned</button>
  </div>
</div>
</div>
                    </>
                    )
                  })
                }
              </div>
            </div>
        </div>
      </div>   
      </>
  );
};

export default Services;