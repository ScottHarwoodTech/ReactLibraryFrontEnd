import React from "react"
//books get
//Author, Date,Title, Publisher,Edition
class Book extends React.Component
{
  DeleteElement = (e) =>
  {
    var data = {
      "@type":"book",
      'author':{'name':this.state.value.author},
      'title':this.state.value.title,
      'publishedDate': new Date(this.state.value.date).getTime(),
      'type': "scott.harwood.library.system.book",
      'edition':this.state.value.edition,
      "Publisher":{'name':this.state.value.publisher}
    }
    var Xhttp = new XMLHttpRequest();
    Xhttp.open("POST","http://192.168.102.16:8080/delete/deleteBook",true);
    Xhttp.setRequestHeader("Content-Type","application/json");
    Xhttp.send(JSON.stringify(data));
  }
  componentWillMount()
  {
    this.setState(this.props);
  }
  render()
  {
    return (
      <div className = "Item">
        <div className="row">Book</div>
        <div className = "row">
          <div className = "col s4">{this.props.value.author}</div>
          <div className = "col s4">{this.props.value.title} </div>
          <div className = "col s4">{this.props.value.publisher} </div>
        </div>
        <div className= "row">
          <div className="col s3 waves-effect waves-light btn-small" onClick={this.DeleteElement}>Delete</div>
          <div className = "col s3">{this.props.value.date}</div>
          <div className = "col s1">{this.props.value.edition} </div>
        </div>
      </div>
    )
  }
}
export default Book
