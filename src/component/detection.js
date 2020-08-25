import React from "react";
const bodyPix = require("@tensorflow-models/body-pix");
const img = document.getElementById("image");
class Detection extends React.Component {
  async LoadAndPredict() {
    const net = await bodyPix.load(/** optional arguments, see below **/);

    /**
     * One of (see documentation below):
     *   - net.segmentPerson
     *   - net.segmentPersonParts
     *   - net.segmentMultiPerson
     *   - net.segmentMultiPersonParts
     * See documentation below for details on each method.
     */
    const segmentation = await net.segmentPerson(img);
    console.log(segmentation);
  }
  render() {
    return (
      <div>
        <img
          src="static/img/afz.jpg"
          id="image"
          height="700px"
          width="500px"
        ></img>
      </div>
    );
  }
}
export default Detection;
