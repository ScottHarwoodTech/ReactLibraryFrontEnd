import React from 'react'

class AddBook extends React.Component{
  postData = (e) =>
  {
    e.preventDefault()
    var data = {
      "@type":"book",
      'author':{'name':e.target.author.value},
      'title':e.target.title.value,
      'publishedDate': new Date(e.target.date.value).getTime()/1000,
      'type': "scott.harwood.library.system.book",
      'edition':e.target.edition.value,
      "Publisher":{'name':e.target.publisher.value}
    }
    var Xhttp = new XMLHttpRequest();
    Xhttp.open("POST","http://192.168.102.16:8080/add/book",true);
    Xhttp.setRequestHeader("Content-Type","application/json");
    Xhttp.send(JSON.stringify(data));
document.forms["submit"].reset()
  }
  render()
  {
    return (
      <form name="submit"onSubmit={this.postData}>
        <label htmlFor="author">Author</label>
        <input id="author" type="text"/>
        <label htmlFor="title">Title</label>
        <input id="title" type="text"/>
        <label htmlFor="publisher">Publisher</label>
        <input id="publisher" type="text"/>
        <label htmlFor="edition">Edition</label>
        <input id="edition" type="number"/>
        <label htmlFor="date">Date</label>
        <input id="date" type="date"/>
        <button className="btn pink">Add</button>
      </form>
    )
  }
}
export default AddBook
