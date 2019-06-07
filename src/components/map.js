import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import Pusher from "pusher-js"
import countries from "../lib/countries.json"
import { config } from "../config"

const wrapperStyles = {
width: "100%",
maxWidth: 980,
margin: "0 auto",
}

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentlyClassifiedCountries: []
    }
    this.map = null;

    this.processClassification = this.processClassification.bind(this);
    this.renderCountry = this.renderCountry.bind(this);
  }

  componentDidMount() {
    const pusher = new Pusher('79e8e05ea522377ba6db', {encrypted: true});
    const channel = pusher.subscribe('panoptes');
    channel.bind('classification', this.processClassification);
  }

  processClassification(classification) {
    const location = classification.geo.country_name;
    if (location === "") {
      return null;
    }
    const recentlyClassifiedCountries = [...this.state.recentlyClassifiedCountries];

    if (recentlyClassifiedCountries.indexOf(location) < 0) {
      recentlyClassifiedCountries.push(location);
      this.setState({ recentlyClassifiedCountries });
      this.map.forceUpdate();
    }
  }

  renderCountry(country, projection) {
    console.log("rendering country");
    const countryName = country.properties.SOVEREIGNT;
    const fillColor = this.state.recentlyClassifiedCountries.indexOf(countryName) >= 0 ?
      "#E0FF3D" : "#001133";

    return (
      <Geography
        geography={country}
        projection={projection}
        style={{
          default: {
            fill: fillColor,
            stroke: "#E0FF3D",
            strokeWidth: 0.75,
            outline: "none",
          },
          hover: {
            fill: fillColor,
            stroke: "#E0FF3D",
            strokeWidth: 0.75,
            outline: "none",
          },
        }}
      />
    )
  }

  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies ref={m => (this.map = m)} geography={countries}>
              {(geographies, projection) => geographies.map(geography => (
                this.renderCountry(geography, projection)
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default Map
