import React from "react"
//books get
//Author, Date,Title, Publisher,Edition
class Book extends React.Component
{
  render()
  {
    return (
      <div className = "Item">
        <div className = "row">
          <div className = "col s4">{this.props.value.author}</div>
          <div className = "col s4">{this.props.value.title} </div>
          <div className = "col s4">{this.props.value.publisher} </div>
        </div>
        <div className= "row">
          <div className="col s3 waves-effect waves-light btn-small">Delete</div>
          <div className = "col s3">{this.props.value.date}</div>
          <div className = "col s1">{this.props.value.edition} </div>
        </div>
      </div>
    )
  }
}
export default Book
