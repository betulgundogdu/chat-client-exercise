import React from 'react';
import './FilePreview.css';
import { IoMdClose } from 'react-icons/io';
import { MdSend } from 'react-icons/md';
import { VscAdd } from 'react-icons/vsc';

const FilePreview = ({
  file, sendImage, setUploadFlag, uploadFlag,
}) => (
  <div className="filePreview container">
    <div className="header">
      <button
        type="button"
        onClick={() => setUploadFlag(!uploadFlag)}
      >
        <IoMdClose className="icon" />
      </button>
      <span>Preview</span>
    </div>
    <div className="preview">
      <img
        src={file ? URL.createObjectURL(file) : null}
        alt={file ? file.name : null}
      />
    </div>
    <div className="footer">
      <button
        type="button"
        onClick={sendImage}
      >
        {' '}
        <MdSend className="icon" />
        {' '}
      </button>
      <div className="previewThumbs">
        <div className="item">
          {
            file && (
            <img
              className="thumb"
              src={file ? URL.createObjectURL(file) : null}
              alt={file ? file.name : null}
            />
            )
          }
        </div>
      </div>
      <div className="addFile">
        <button
          type="button"
        >
          <VscAdd className="icon" />
          {' '}
          add file
        </button>
      </div>
    </div>
  </div>
);

export default FilePreview;
