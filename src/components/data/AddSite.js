import React from 'react'

class AddSite extends React.Component{
  postData = (e) =>
  {
    e.preventDefault()
    var data = {
      "@type":"site",
      'author':{'name':e.target.author.value},
      'title':e.target.title.value,
      'publishedDate': new Date(e.target.date.value).getTime()/1000,
      'type': "scott.harwood.library.system.article",
      'url':e.target.url.value,
      "dOA":new Date(e.target.dateOfAccess.value).getTime()/1000
    }
    var Xhttp = new XMLHttpRequest();
    Xhttp.open("POST","http://192.168.102.16:8080/add/site",true);
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
          <label htmlFor="title">Title</label>
          <input id="title" type="text"/>
          <label htmlFor="url">URL</label>
          <input id="url" type="text"/>
          <label htmlFor="edition">Edition</label>
          <input id="edition" type="number"/>
          <label htmlFor="date">Date</label>
          <input id="date" type="date"/>
          <label htmlFor="DateOfAccess">Date Of Access</label>
          <input id="dateOfAccess" type="date"/>
          <button className="btn pink">Add</button>
      </form>
    )
  }
}
export default AddSite
