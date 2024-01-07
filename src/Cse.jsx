import React from 'react'
import Card from './Card';
const Cse = () => {
  return (
<>
<div className='my-5'>
<h1 className='branchtag'>Computer Science Engineering</h1>
     </div>
     <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row gy-4'>
                 {
                  Sdata.map((val,ind)=>{
                    return <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                    />
                  })}
                 

              </div>
            </div>
        </div>
      </div> 
</>
  );
};

const Sdata = [
  {
    imgsrc: "./logo.png",
    title: "Web development",
  },
  {
    imgsrc:  "./logo.png",
    title: "App development",
  },
  {
    imgsrc:  "./logo.png",
    title: "Software development",
  },
  {
    imgsrc:  "./logo.png",
    title: "Digital Marketing",
  },
  {
    imgsrc:  "./logo.png",
    title: "Android development",
  },
  {
    imgsrc:  "./logo.png",
    title: "Marketing",
  },
];
export default Cse;
