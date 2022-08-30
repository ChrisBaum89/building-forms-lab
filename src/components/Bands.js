import React from "react";
import { Component } from "react"
import Band from "./Band"
import { connect } from "react-redux"

class Bands extends Component {


    render() {
        const renderBands = this.props.bands.bands.map((band, id) => {
            return <Band band={band} index={id} key={id}/>
        })

        return (
            <div>
                {renderBands}
            </div>
        )
    }
}

const mapGlobalStateToProps = state => {
    return { bands: state }
}

export default connect(mapGlobalStateToProps)(Bands)