import React from "react";

export class Header extends React.Component {
	 constructor (props) {
           super(props);
           this.state = {
            music: []
        };
    }
    fetchMusic () {
	  fetch('https://api.chucknorris.io/jokes/random?category=music')
	  .then(results => {
	    return results.json();
	  })
	  .then(data => {
	      let music = [<p>{data.value}</p>];
	      this.setState({music:music});
	  });
	}

	render() {
		return (			
                    <div className="row">
                        <div className="col-md-12">
                            <h2>{this.state.music}</h2>
                                
                        </div>
                    </div>
    );
}
};