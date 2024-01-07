// MyPopupCard.js
import { XCircle } from 'lucide-react';
import React from 'react';

import Bookcard from './Bookcard';

import "./Mymodel.css";


const MyPopupCard = ({onClose}) => {
  
  return (
   <>
   <div onClick={onclose}>
   <div className='modelContainer'>
    <div className='modelRight'>
      <button onClick={onClose} className='closeBtn'><XCircle/></button>
      <div className='content'>
            <Bookcard/>
          </div>
    </div>
    </div>
    </div>
   </>
  );
};

export default MyPopupCard;

