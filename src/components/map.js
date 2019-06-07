import React, { Component } from "react"
import {
ComposableMap,
ZoomableGroup,
Geographies,
Geography,
} from "react-simple-maps"
import countries from "../lib/countries.json"

const wrapperStyles = {
width: "100%",
maxWidth: 980,
margin: "0 auto",
}

class Map extends Component {
  componentWillReceiveProps(next) {
    console.log(next);
  }

  renderCountry(country, projection, i) {
    return (
      <Geography
        key={i}
        geography={country}
        projection={projection}
        style={{
          default: {
            fill: "#001133",
            stroke: "#E0FF3D",
            strokeWidth: 0.75,
            outline: "none",
          },
          hover: {
            fill: "transparent",
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
            <Geographies geography={countries}>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
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
