import React from "react";

function Information() {
  return (
    <>
      <h1>Critter Census</h1>
      <div className="grid">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5b834741f407b4df429d791a/1561573753221-SMUWJEC2PFFJCN5XXZKJ/SC06190015celestial.jpg?format=1000w"
          alt="SC06190015celestial.jpg"
        />
      </div>

      <div id="squirrels" className="cell">
        <p>
          (Squirrels Location) One of the best locations for squirrel hunting is
          close to water because trees growing alongside a water source are more
          likely to have the largest fruit and nuts.
        </p>
      </div>
      <div id="chipmunks" className="cell">
        <p>
          (Chipmunks Location) generally seen scampering through the undergrowth
          of a variety of environments from alpine forests to shrubby deserts.
          Some dig burrows to live in, complete with tunnels and chambers, while
          others make their homes in nests, bushes, or logs.
        </p>
      </div>
      <div id="wombats" className="cell">
        <p>
          (Wombats Location) Wombats live in the dry grasslands of northern and
          southern Australia.
        </p>
      </div>
      <div class="cell" id="Groundhogs">
        <p>
          (Groundhogs Location) Groundhogs are found in the majority of central
          and eastern United States, as well as in parts of Alaska and Canada.
          Groundhogs prefer transitional areas where forest or woodland meets a
          well-vegetated open field or meadow.
        </p>
      </div>

      <iframe
        title="map"
        allow="geolocation"
        src="https://data.cityofnewyork.us/dataset/2018-Squirrel-Census-Fur-Color-Map/fak5-wcft/embed?width=800&height=600"
        width="800"
        height="600"
      ></iframe>
    </>
  );
}

export default Information;
