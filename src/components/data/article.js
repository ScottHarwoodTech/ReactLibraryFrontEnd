import React from 'react'
//articles will have
//Author,Year,ToA,ToP,issue,Pages
class Article extends React.Component
{
  render()
  {
    return (
      <div>
        <div class = "row">
          <div className = "col s4">{this.props.value.author}</div>
          <div className = "col s4">{this.props.value.title} </div>
          <div className = "col s2">{this.props.value.issue} </div>
          <div className = "col s2">{this.props.value.pages} </div>
        </div>
        <div className= "row">
          <div className = "col s3">{this.props.value.date}</div>
          <div className = "col s1">{this.props.value.issue} </div>
          <div className = "col s8">{this.props.value.ToP} </div>
        </div>
    </div>
    )
  }
}
export default Article
