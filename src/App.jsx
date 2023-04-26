import { useState } from "react"

import createLinkQRCode from "qrcode"
import QRCodeImage from "react-qr-code"

import "./App.css"

export function App() {
    const [link, setLink] = useState("")
    const [downloadLink, setDownloadLink] = useState("")

    function handleGenerateDownloadLink(newLink) {
        createLinkQRCode.toDataURL(
            newLink,
            {
                width: 600,
                margin: 3,
            },
            (err, data) => {
                setDownloadLink(data)
            }
        )
    }

    function handleGenerateQrcode(newLink) {
        setLink(newLink)
        handleGenerateDownloadLink(newLink)
    }

    return (
        <div className="container">
            {link && <QRCodeImage value={link} />}

            <input
                placeholder="Digite seu link"
                className="input"
                onChange={(e) => handleGenerateQrcode(e.target.value)}
            />

            {downloadLink && (
                <a
                    href={downloadLink}
                    download={`${link}-qrcode.png`}
                    className="link"
                >
                    Baixar QRCode
                </a>
            )}
        </div>
    )
}
