import React from "react"
import generalStyles from "./general.module.css"
import icons from "../images/icons.png";
import mobileIcons from "../images/mobile-icons.png";

const General = () => (
  <div className={generalStyles.general}>
    <h3 className='sub-header'>What is Zooniverse?</h3>
    <span className='descriptor'>
      Zooniverse is the world's largest people-powered research
      platform. What does that mean? Lorem ipsum dolor sit.
    </span>
    <div className={generalStyles.content}>
      <img alt="Discipline Icons" className="icons-image" src={icons} />
      <div className={generalStyles.column}>
        <span>
        Participate in tons of projects just like this one in topics ranging
        from astronomy to zoology.
        </span><br/>
        <span>
        Scientist need your help to process all shapes of galaxies or
        identifying animal species. By answering a few questions, you'll
        make a big difference in the scientific community!
        </span>
      </div>
      <img alt="Discipline Icons" className="icons-image-mobile" src={mobileIcons} />
    </div>
    <button className='hollow-button'>
      <a href='https://www.zooniverse.org'>zooniverse.org</a>
    </button>
  </div>
);

export default General;
