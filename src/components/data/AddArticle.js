import React from 'react'

class AddArticle extends React.Component{
  postData = (e) =>
  {
    e.preventDefault()
    var data = {
      "@type":"article",
      'author':{'name':e.target.author.value},
      'title':e.target.ToP.value,
      'TitleOfArticle':e.target.title.value,
      'publishedDate': new Date(e.target.date.value).getTime()/1000,
      'type': "scott.harwood.library.system.article",
      'issue':e.target.issue.value,
      'pages':e.target.pages.value
    }
    var Xhttp = new XMLHttpRequest();
    Xhttp.open("POST","http://192.168.102.16:8080/add/journal",true);
    Xhttp.setRequestHeader("Content-Type","application/json");
    Xhttp.send(JSON.stringify(data));
document.forms["submit"].reset()
  }
  render()
  {
    return (
      <form name="submit" onSubmit={this.postData}>
          <label htmlFor="author">Author</label>
          <input id="author" type="text"/>
          <label htmlFor="title">Title Of Article</label>
          <input id="title" type="text"/>
          <label htmlFor="ToP">Title Of Publication</label>
          <input id="ToP" type="text"/>
          <label htmlFor="pages">Pages</label>
          <input id="pages" type="number"/>
          <label htmlFor="issue">Issue</label>
          <input id="issue" type="number"/>
          <label htmlFor="date">Date</label>
          <input id="date" type="date"/>
          <button className="btn pink">Add</button>
      </form>)
  }
}
export default AddArticle
