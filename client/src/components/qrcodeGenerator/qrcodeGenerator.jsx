import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './qrcodeGenerator.css';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QRcodeGenerator = () => {
    const [link, setLink] = useState('');
    const qrCodeRef = useRef(null);

    const isValidURL = (url) => {
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlPattern.test(url);
    }

    const handleSaveImage = () => {
        const canvas = qrCodeRef.current.querySelector('canvas');
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'qrcode.png';
        link.click();
    };

    const handleError = () => {
        toast.dismiss()
        toast.error('This is not a valid URL')
    }

    return (
        <>
            <div className="qr-generator-container">
            <ToastContainer position='top-center' />
                <h2>QR Generator</h2>
                <input
                    autoComplete="off"
                    type="text"
                    name="link"
                    className="qr-generator-input"
                    onChange={(e) => setLink(e.target.value)}
                />
                <div ref={qrCodeRef} className="qr-generator-qrcode">
                    <QRCodeCanvas value={link} size={300} />
                </div>
                <button className="qr-generator-button" onClick={isValidURL(link) ? handleSaveImage : handleError}>
                    Save Image
                </button>
            </div>
        </>
    );
};

export default QRcodeGenerator;