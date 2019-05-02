import React from "react"
import recentStyles from "./recent.module.css"

const placeholder = ["SBJ.26440667", "SBJ.26440667", "SBJ.26440667"];

const Recent = () => (
    <div className={recentStyles.recent}>
      <h3 className='sub-header'>Recent galaxies</h3>
      <span className='descriptor'>
        People just like you have been classifying galaxies from U!Scientist at
        the Adler as well as online on Galaxy Zoo.
      </span>
      <div className={recentStyles.subjects}>
        {placeholder.map((image, i) =>
            <div key={i} className={recentStyles.subject}>
              <div />
              <a href="https://www.zooniverse.org">{image}</a>
            </div>
        )}
      </div>
      <button className='hollow-button'>
        <a href='https://www.galaxyzoo.org'>see more at galaxyzoo.org</a>
      </button>
    </div>
);

export default Recent;
