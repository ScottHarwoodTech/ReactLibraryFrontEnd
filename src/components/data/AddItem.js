import React from "react"
import AddSite from "./AddSite"
import AddBook from "./AddBook"
import AddArticle from "./AddArticle"
class AddItem extends React.Component{
  state =
  {
    type:"book"
  }
  typeSelected= (e)=>
  {
    this.setState({type:e.target.value})
    e.preventDefault()
  }
  render()
  {
    let addItem;
    if (this.state.type==="book")
    {
       addItem=<AddBook></AddBook>
    }
    else if (this.state.type==="article")
    {
       addItem=<AddArticle></AddArticle>
    }
    else if (this.state.type==="site")
    {
       addItem=<AddSite></AddSite>
    }
    return (
      <div className="container">
      <form onSubmit={this.react} >
        <label className="input-field col s12 lighten-3">
          Please Select Your Item Type
          <select name="itemType" className="browser-default" onChange={this.typeSelected}>
            <option value="book">book</option>
            <option value="site">site</option>
            <option value="article">article</option>
          </select>
        </label>
      </form>
      {addItem}
    </div>)

  }
}

export default AddItem
