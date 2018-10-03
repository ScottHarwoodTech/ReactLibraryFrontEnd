import React from 'react'
//Site Will have
//Author,Date, Title, url, DoA

class Site extends React.Component{
  DeleteElement = () =>
  {
    console.log("delete");
    var data = {
      "@type":"site",
      'author':{'name':this.state.value.author},
      'title':this.state.value.title,
      'publishedDate': new Date(this.state.value.date).getTime(),
      'type': "scott.harwood.library.system.site",
      'url':this.state.value.url.value,
      "dOA":new Date(this.state.value.dateOfAccess).getTime()
    }
    var Xhttp = new XMLHttpRequest();
    Xhttp.open("POST","http://192.168.102.16:8080/delete/deleteSite",true);
    Xhttp.setRequestHeader("Content-Type","application/json");
    Xhttp.send(JSON.stringify(data));
  }
  componentWillMount()
  {
    this.setState(this.props);
  }
  render()
  {
    return(
      <div id="parent">
        <div className = "row">
          <div className = "col s4">{this.props.value.author}</div>
          <div className = "col s8">{this.props.value.title} </div>
        </div>
        <div className = "row">
          <div className="col s3 waves-effect waves-light btn-small" onClick={this.DeleteElement} >Delete</div>
          <div className = "col s2">{this.props.value.date * 1000} </div>
          <div className = "col s5">{this.props.value.url} </div>
          <div className = "col s2">{this.props.value.DoA} </div>
        </div>
    </div>
    )
  }
}

export default Site
