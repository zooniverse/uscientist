import React from "react"
import ReactGA from "react-ga"
import Layout from "../components/layout"
import CallToAction from "../components/CallToAction"
import Divider from "../components/divider"
import General from "../components/general"
import RecentData from "../containers/RecentData"
import Recent from "../components/recent"
import Data from "../components/data"
import yellowLogo from "../images/yellow-logo.png"
import spiral from "../images/background-spiral.png"
import smallStar from "../images/yellow-star.png"
import backgroundStar from "../images/background-star.png"
import zooniverseBackground from "../images/zooniverse-logo-white.png"
import spiralLeft from "../images/spiral-left.png"
import starRight from "../images/star-right.png"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialScroll: false,
      endScroll: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  logToGA(category, action) {
    ReactGA.event({ category, action });
  }

  handleScroll(e) {
    const { initialScroll, endScroll } = this.state;
    const reachedBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;

    if (!initialScroll) {
      this.logToGA('InitialScroll', 'Began Scrolling from Top');
      this.setState({ initialScroll: true });
    }
    if (reachedBottom && !endScroll) {
      this.logToGA('BottomScroll', 'Scrolled to Bottom of Page');
      this.setState({ endScroll: true });
    }
  }

  render() {
    return (
      <Layout>
        <div className="layout-div">
          <img alt="Large U!Scientist Logo" className="large-logo" src={yellowLogo} />
          <img alt="Spiral Background" className="spiral-background" src={spiral} />
          <img alt="Small Background Star" className="small-star" src={smallStar} />
          <img alt="Background Star" className="background-star" src={backgroundStar} />
          <CallToAction />
          <Divider />
          <Recent />
          <Divider />
          <img alt="Zooniverse Background Logo" className="zooniverse-background-image" src={zooniverseBackground} />
          <img alt="Background Star" className="background-star-right" src={starRight} />
          <img alt="Background Spiral" className="background-spiral-left" src={spiralLeft} />
          <Data />
          <Divider />
          <General />
          <img alt="Small Background Star" className="small-star-desktop" src={smallStar} />
        </div>
      </Layout>
    )
  }
}
