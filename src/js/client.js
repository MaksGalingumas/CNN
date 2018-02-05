import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    constructor () {
        super();
        this.state = {
            joke: [],
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount () {
        fetch('https://api.chucknorris.io/jokes/random')
  .then(results => {
    return results.json();
  })
  .then(data => {
      let joke = [<p>{data.value}</p>];
      this.setState({joke:joke});
  })
}
  render () {
    return (
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center top">
                        <h2>{this.state.joke}</h2>
                            <button onClick={this.componentDidMount} className="button red"><p>NEW JOKE!</p><span className="button2">Click Me!</span></button>
                        </div>
                    </div>
            </div>
            )
}
}
        
const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
