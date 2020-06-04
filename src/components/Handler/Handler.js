import React, { useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import imageCompression from 'browser-image-compression';
import "./Handler.css";

import placeholder from "../../assets/imgs/image-placeholder.jpg"

function Handler(){
    const [link, setLink] = useState(null);
    const [file, setFile] = useState("");
    const [compressedLink, setCompressedLink] = useState(null);
    const [compressedFile, setCompressedFile] = useState("");
    const [compressedClick, setCompressedClick] = useState(false);

    function changeHandler(e){
        const image = e.target.files[0];
        setLink(URL.createObjectURL(image))
        setFile(image)
    }

    function Compression(e){
        e.preventDefault();

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 500,
            useWebWorker: true
          };

        if (options.maxSizeMB >= file.size / 1024) {
            alert("Image is too small, can't be Compressed!");
            return 0;
        } else{
            imageCompression(file, options)
                .then(function(x){
                    setCompressedLink(URL.createObjectURL(x));
                    setCompressedFile(x);
                })
            setCompressedClick(true);
        }
    }

    function clearHandler(e){
        setLink(null)
        setFile(null)
        document.getElementById('files-upload').value = null;
    }

    return(
        <Row>
            <Col>
                <img src={link ? link : placeholder}
                alt="placeholder"
                className="img-fluid" />
            </Col>
            <Col>
                <input type="file"
                    accept="image/*"
                    onChange={changeHandler}
                    id="files-upload" />

                <Button variant="warning" onClick={clearHandler}>Clear</Button>

                <Button variant="outline-primary" onClick={Compression}>Compress</Button>

                {compressedClick ? (
                    <div>
                        <Row>
                            <Col>
                                <span>Previous File Size: {file.size}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span>New File Size: {compressedFile.size}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href={compressedLink}
                                    download={compressedFile}>
                                    Download
                                </a>
                            </Col>
                        </Row>
                    </div>
                ) : (
                    <></>
                )}
                
            </Col>
        </Row>
    )
}

export default Handler;