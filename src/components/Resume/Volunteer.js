import React from 'react';

function Volunteer() {
  return(
    <div id="volunteer" className="resume-sections">
        <h1><span className="resume-title highlight-blue">Volunteer Work</span></h1>
        <br/>
        <h2><a className={"links"} href={"https://afs.org.ar/"} rel={"noreferrer"}>AFS Intercultural Programs</a></h2>
        <br/>
        <ul>
          <li> <b>Visibility Coordinator - (2014-2018)</b></li>
            <p>As a visibility coordinator, I performed tasks like social networks management, image and video edition, contact with radio stations.</p>
          <li><b>AFS Contact Person - (2015-2020)</b></li>
            <p>As an AFS Contact Person, I was a support for exchange students in their adaptation in the host country, help the host family in living with a foreign teenager.</p>
          <li><b>Orientations Coordinator - (2019-2020)</b></li>
            <p>As an Orientations Coordinator, my dutties were perform the orientations (talks, learning activities)   that the students receive during their exchange program.</p>
        </ul>
    </div>
  )
}

export default Volunteer;