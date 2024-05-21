import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = () => {
  // Full URL to the hosted website's button route
  const redirectUrl = "https://www.yourwebsite.com/button"; 

  return (
    <div>
      <h2>Scan this QR Code</h2>
      <QRCode value={redirectUrl} />
    </div>
  );
};

export default QRCodeComponent;
