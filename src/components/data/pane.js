import React from 'react'
import Item from "./item"

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

class Pane extends React.Component{
  state = {
    items:"",
    path:""
  }
  getData = function(path)
  {
    fetch(path).then(
          results => {
            return results.json();
          }
        ).then(data =>{
          let items = data.map((item) => {
            return <Item key={guid()} type = {item.type} author={item.author.name}
                    date={item.publishedDate} ToA = {item.ToA}
                    title = {item.title} publisher = {item.Publisher.name}
                    issue= {item.issue} edition={item.edition} pages={item.pages}
                    url={item.url} DoA = {item.DoA} />;
          })
          this.setState({items:items});
        })}
  componentDidMount(){
    this.getData(this.props.pathV);
    this.interval = setInterval(() => this.getData(this.props.pathV),5000);
  }
  componentWillUnmount()
  {
    this.setState({items:[]})
    clearInterval(this.interval)
  }

  render(){
    return (this.state.items)
  }
}

export default Pane
