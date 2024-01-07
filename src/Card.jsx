import React, { useState ,useEffect } from 'react';
import MyPopupCard from './MyPopupCard';
import "./Mymodel.css";

const Card = (props) => {
    const [showModel, setshowModel] = useState(false);

    
    useEffect(()=>{
        console.log(showModel);
      },[showModel])
    
  

    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{props.title}</h5>
                        <button onClick={() => setshowModel(true)} className="btn btn-primary">Click Here</button>
                        {showModel && <MyPopupCard onClose={()=>{setshowModel(prev => !prev)}}/>}
                    </div>
                </div>
            </div>
                 
   </>
  );
};

export default Card;
