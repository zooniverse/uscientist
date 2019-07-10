import React from "react"
import apiClient from "panoptes-client/lib/api-client"
import ReactGA from "react-ga"
import Pusher from "pusher-js"
import Layout from "../components/layout"
import CallToAction from "../components/CallToAction"
import Divider from "../components/divider"
import General from "../components/general"
import RecentSubjects from "../containers/RecentSubjects"
import RecentData from "../containers/RecentData"
import yellowLogo from "../images/yellow-logo.png"
import spiral from "../images/background-spiral.png"
import smallStar from "../images/yellow-star.png"
import backgroundStar from "../images/background-star.png"
import zooniverseBackground from "../images/zooniverse-logo-white.png"
import spiralLeft from "../images/spiral-left.png"
import starRight from "../images/star-right.png"
import { config } from "../config"

const GZ_HISTORICAL_RETIREMENT_COUNT = 1569679;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endScroll: false,
      initialScroll: false,
      newestClassification: null,
      project: null
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.processClassification = this.processClassification.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    apiClient.type("projects").get({ id: config.projectID })
      .then(([project]) => {
        this.setState({ project });
      })

    const pusher = new Pusher('79e8e05ea522377ba6db', {encrypted: true});
    const channel = pusher.subscribe('panoptes');
    channel.bind('classification', this.processClassification);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  processClassification(classification) {
    if (classification.project_id === config.projectID) {
      this.setState({ newestClassification: classification });
    }
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
    const baseRetiredCount = (this.state.project && this.state.project.retired_subjects_count) || 0;
    const retiredCount = baseRetiredCount + GZ_HISTORICAL_RETIREMENT_COUNT;

    return (
      <Layout>
        <div className="layout-div">
          <img alt="Large U!Scientist Logo" className="large-logo" src={yellowLogo} />
          <img alt="Spiral Background" className="spiral-background" src={spiral} />
          <img alt="Small Background Star" className="small-star" src={smallStar} />
          <img alt="Background Star" className="background-star" src={backgroundStar} />
          <CallToAction />
          <Divider />
          <RecentSubjects newestClassification={this.state.newestClassification} project={this.state.project} />
          <Divider />
          <img alt="Zooniverse Background Logo" className="zooniverse-background-image" src={zooniverseBackground} />
          <img alt="Background Star" className="background-star-right" src={starRight} />
          <img alt="Background Spiral" className="background-spiral-left" src={spiralLeft} />
          <RecentData newestClassification={this.state.newestClassification} retiredCount={retiredCount} />
          <Divider />
          <General />
          <img alt="Small Background Star" className="small-star-desktop" src={smallStar} />
        </div>
      </Layout>
    )
  }
}
