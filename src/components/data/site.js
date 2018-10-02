import React from 'react'
//Site Will have
//Author,Date, Title, url, DoA

class Site extends React.Component{
  render()
  {
    return(
      <div id="parent">
        <div className = "row">
          <div className = "col s4">{this.props.value.author}</div>
          <div className = "col s8">{this.props.value.title} </div>
        </div>
        <div className = "row">
          <div className = "col s3">{this.props.value.date} </div>
          <div className = "col s6">{this.props.value.url} </div>
          <div className = "col s3">{this.props.value.DoA} </div>
        </div>
    </div>
    )
  }
}

export default Site
