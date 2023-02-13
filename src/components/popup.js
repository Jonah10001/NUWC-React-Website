import React, { useState } from "react";
import '../popup.css';

function MailingListPopup() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  function handleClose() {
    setIsPopupVisible(false);
  }

  return (
    <div>
      {isPopupVisible && (
        <div className="popup-content">
        <div className="close-x" onClick={handleClose}>
            &times;
        </div>
        <h2>Let's kick some balls!</h2>
        <p>Get the latest news and updates from NU World Cup.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfenz6NC_uXNMjGZXphwtet5nLlsuaVOqr4NWtqIH5YWZdybw/viewform?usp=sf_link" target="_blank">
            Sign up now
        </a>
        </div>
      )}
    </div>
  );
}

export default MailingListPopup;