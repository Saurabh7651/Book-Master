
import React, { useEffect, useState } from 'react';

const Card = ({ imageSrc, description, buyLink, downloadLink }) => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(()=>{
    document.body.style.overflowY="hidden";
    return()=>{
        document.body.style.overflowY="scroll";
    };
  },[]);
  const openLink = (link) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bookcard">
      <img src={imageSrc} alt="Product" className="bookcard-image" />
      <div className="bookcard-content">
        <div className="bookcard-description">
          <p>{description}</p>
        </div>
        <div className="book-button-container">
          <button className="book-buy-button" onClick={() => openLink(buyLink)}>
            Buy
          </button>
          <button className="book-download-button" onClick={() => openLink(downloadLink)}>
            Download
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>This book is not available for download.</p>
            <button onClick={closePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

const YourComponent = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: 'https://m.media-amazon.com/images/I/71Q0U-8lxJS._SY522_.jpg',
      description: 'Dopamine Detox : A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things',
      buyLink: 'https://www.amazon.in/Dopamine-Detox-Remove-Distractions-Productivity-ebook/dp/B098MHBF23/ref=sr_1_7?crid=IYCNWFIK40WV&keywords=books&qid=1704271707&sprefix=books%2Caps%2C399&sr=8-7',
      downloadLink: '',
    },
    {
      id: 2,
      imageSrc: 'https://m.media-amazon.com/images/I/71Q0U-8lxJS._SY522_.jpg',
      description: 'Dopamine Detox : A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things',
      buyLink: 'https://www.amazon.in/Dopamine-Detox-Remove-Distractions-Productivity-ebook/dp/B098MHBF23/ref=sr_1_7?crid=IYCNWFIK40WV&keywords=books&qid=1704271707&sprefix=books%2Caps%2C399&sr=8-7',
      downloadLink: '',
    },
    {
      id: 3,
      imageSrc: 'https://m.media-amazon.com/images/I/71Q0U-8lxJS._SY522_.jpg',
      description: 'Dopamine Detox : A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things',
      buyLink: 'https://www.amazon.in/Dopamine-Detox-Remove-Distractions-Productivity-ebook/dp/B098MHBF23/ref=sr_1_7?crid=IYCNWFIK40WV&keywords=books&qid=1704271707&sprefix=books%2Caps%2C399&sr=8-7',
      downloadLink: '',
    },
    // Add more card data as needed
  ];

  return (
    <div className="bookcard-container">
      {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default YourComponent;