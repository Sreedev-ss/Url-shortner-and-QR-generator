import React from 'react'
import './inputShortner.css'
import axios from 'axios';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InputShortner = () => {
    const [URL, setURL] = useState('');
    const [shortURL, setShortURL] = useState('');
    const [copied, setCopied] = useState(false);

    const handleSubmit = async () => {
        axios.post(`https://api.shrtco.de/v2/shorten?url=${URL}`).then((res)=>{
            setShortURL(res?.data?.result?.full_short_link);
        }).catch(()=>{
            setShortURL('')
            handleError()
        })
    };

    const isValidURL = (url) => {
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlPattern.test(url);
    }

    const handleError = () => {
        toast.dismiss()
        toast.error('This is not a valid URL')
    }

    return (
        <>
            <div className="link-shortener-container">
            <ToastContainer position='top-center' />
                <h2>URL Shortner</h2>
                <div className="link-shortener-form">
                    <input
                        required
                        autoComplete="off"
                        type="text"
                        name="url"
                        className="link-shortener-input"
                        placeholder="Enter URL"
                        value={URL}
                        onChange={(e) => {
                            setURL(e.target.value);
                            setCopied(false);
                        }}
                    />
                    <button className="link-shortener-button" onClick={isValidURL(URL) ?handleSubmit: handleError}>
                        Submit
                    </button>
                </div>

                {shortURL && (
                    <CopyToClipboard text={shortURL} onCopy={() => setCopied(true)}>
                        <div className="link-shortener-form">
                            <input type="text" name="shorturl" className="link-shortened-input" value={shortURL} disabled />
                            <button className="link-copy-button">
                                <span>{copied ? <span>Copied ✅</span> : <span>Copy 📋</span>}</span>
                            </button>
                        </div>
                    </CopyToClipboard>
                )}
            </div>
        </>
    );
};

export default InputShortner;