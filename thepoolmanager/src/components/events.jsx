import React from "react"
import {NavLink}  from 'react-router-dom';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';




  export default class Events extends React.Component {
    render() {
        return (
          <div className= "style">
            <ImagesUploader
                url="nodemysql"
                optimisticPreviews
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label="Upload multiple images"
                />

              </div>
        );
    }
}
