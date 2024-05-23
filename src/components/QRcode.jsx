// src/components/QRCode.jsx
import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = () => {
  const redirectUrl = "https://pages-1-lqd9.vercel.app/button";  // Update with your actual URL

  return (
    <div>
      <h2>Scan this QR Code</h2>
      <QRCode value={redirectUrl} />
    </div>
  );
};

export default QRCodeComponent;

