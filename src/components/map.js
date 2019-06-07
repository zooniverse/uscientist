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
    this.matchingCountries = this.matchingCountries.bind(this);
    this.processClassification = this.processClassification.bind(this);
    this.renderCountry = this.renderCountry.bind(this);
  }

  componentDidMount() {
    const pusher = new Pusher('79e8e05ea522377ba6db', {encrypted: true});
    const channel = pusher.subscribe('panoptes');
    channel.bind('classification', this.processClassification);
  }

  processClassification(classification) {
    if (classification.project_id === config.projectID) {
      const location = classification.geo.country_name;
      if (location === "") return null;
      const recentlyClassifiedCountries = [...this.state.recentlyClassifiedCountries];

      if (recentlyClassifiedCountries.indexOf(location) < 0) {
        recentlyClassifiedCountries.push(location);
        this.setState({ recentlyClassifiedCountries });
      }
    }
  }

  // Alleviates some discrepencies between Pusher and TopoJSON country names
  // Eg. "United States" vs "United States of America"
  matchingCountries(location) {
    return this.state.recentlyClassifiedCountries.some((country) => {
      return location.indexOf(country) >= 0 || (country.indexOf(location) >= 0);
    })
  }

  renderCountry(country, projection, i) {
    const countryName = country.properties.SOVEREIGNT;
    const fillColor = this.matchingCountries(countryName) ?
      "#E0FF3D" : "#001133";
    const style = {
      fill: fillColor,
      stroke: "#E0FF3D",
      strokeWidth: 0.75,
      transition: "fill 1s ease-in-out",
      outline: "none",
    }

    return (
      <Geography
        key={i}
        geography={country}
        projection={projection}
        style={{
          default: style,
          hover: style,
          pressed: style
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
            <Geographies disableOptimization geography={countries}>
              {(geographies, projection) => geographies.map((geography, i) => (
                this.renderCountry(geography, projection, i)
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default Map
