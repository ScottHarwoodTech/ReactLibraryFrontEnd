import React from 'react'
import Site from "./site"
import Article from "./article"
import Book from "./book"
//possible Items:
//Author,Pub Date, Title of Article,
//Title Of Pub, issue,place of pub,publisher,edition, pages,url,Date of Access
class Item extends React.Component{

  render(){
    const type = this.props.type.split(".").pop();
      if ( type === "book")
      {
        return <Book value = {this.props} />;
      }
      else if (type === "site") {
        return <Site value= {this.props} />;
      }
      else if (type === "article") {
        return <Article value = {this.props}/>;
      }
      else{ return ""}
  }
}
export default Item
