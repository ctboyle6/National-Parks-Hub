import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Park = (props) => {
  return (
    <div className="card">
      <div className="park-name">{props.attributes.name}</div>
      <div className="park-lat">{props.attributes.latitude}</div>
      <div className="park-lon">{props.attributes.longitude}</div>
      <div className="park-rating">{props.attributes.avg_rating}</div>
      <div className="park-link">
        <Link to={`/parks/${props.attributes.park_code}`}>View Park</Link>
      </div>
    </div>
  )
}

export default Park
