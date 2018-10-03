import React from 'react'
//articles will have
//Author,Year,ToA,ToP,issue,Pages
class Article extends React.Component
{
  DeleteElement = () =>
  {
    var data = {
      "@type":"article",
      'author':{'name':this.state.value.author},
      'title':this.state.value.ToP,
      'TitleOfArticle':this.state.value.title,
      'publishedDate':new Date(this.state.value.date).getTime(),
      'type': "scott.harwood.library.system.article",
      'issue':this.state.value.issue,
      'pages':this.state.value.pages
    }
    console.log(data);
    var Xhttp = new XMLHttpRequest();
    Xhttp.open("POST","http://192.168.102.16:8080/delete/deleteArticle",true);
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
      <div>
        <div className = "row">
          <div className = "col s4">{this.props.value.author}</div>
          <div className = "col s4">{this.props.value.title} </div>
          <div className = "col s2">{this.props.value.issue} </div>
          <div className = "col s2">{this.props.value.pages} </div>
        </div>
        <div className= "row">
          <div className="col s3 waves-effect waves-light btn-small" onClick={this.DeleteElement} >Delete</div>
          <div className = "col s3">{this.props.value.date * 1000}</div>
          <div className = "col s1">{this.props.value.issue} </div>
          <div className = "col s5">{this.props.value.ToP} </div>
        </div>
    </div>
    )
  }
}
export default Article
