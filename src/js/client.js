import React from "react";
import ReactDOM from "react-dom";


class Layout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            joke: []
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
        
fetchMovie () {
	  fetch('https://api.chucknorris.io/jokes/random?category=movie')
	  .then(results => {
	    return results.json();
	  })
	  .then(data => {
	      let movie = [<p>{data.value}</p>];
	      this.setState({movie:movie});
	  });
	}
fetchCelebrity () {
	  fetch('https://api.chucknorris.io/jokes/random?category=celebrity')
	  .then(results => {
	    return results.json();
	  })
	  .then(data => {
	      let celebrity = [<p>{data.value}</p>];
	      this.setState({celebrity:celebrity});
	  });
	}
fetchScience () {
	  fetch('https://api.chucknorris.io/jokes/random?category=science')
	  .then(results => {
	    return results.json();
	  })
	  .then(data => {
	      let science = [<p>{data.value}</p>];
	      this.setState({science:science});
	  });
	}
fetchSport () {
	  fetch('https://api.chucknorris.io/jokes/random?category=sport')
	  .then(results => {
	    return results.json();
	  })
	  .then(data => {
	      let sport = [<p>{data.value}</p>];
	      this.setState({sport:sport});
	  });
	}
fetchFashion () {
	  fetch('https://api.chucknorris.io/jokes/random?category=fashion')
	  .then(results => {
	    return results.json();
	  })
	  .then(data => {
	      let fashion = [<p>{data.value}</p>];
	      this.setState({fashion:fashion});
	  });
	}
        
fetchMoney () {
        fetch('https://api.chucknorris.io/jokes/random?category=money')
          .then(results => {
            return results.json();
          })
          .then(data => {
              let money = [<p>{data.value}</p>];
              this.setState({money:money});
  });
}  
fetchCareer () {
        fetch('https://api.chucknorris.io/jokes/random?category=career')
          .then(results => {
            return results.json();
          })
          .then(data => {
              let career = [<p>{data.value}</p>];
              this.setState({career:career});
  });
}  
fetchAnimal () {
        fetch('https://api.chucknorris.io/jokes/random?category=animal')
          .then(results => {
            return results.json();
          })
          .then(data => {
              let animal = [<p>{data.value}</p>];
              this.setState({animal:animal});
  });
}  
fetchTravel () {
        fetch('https://api.chucknorris.io/jokes/random?category=travel')
          .then(results => {
            return results.json();
          })
          .then(data => {
              let travel = [<p>{data.value}</p>];
              this.setState({travel:travel});
  });
}  
fetchPolitical () {
        fetch('https://api.chucknorris.io/jokes/random?category=political')
          .then(results => {
            return results.json();
          })
          .then(data => {
              let politic = [<p>{data.value}</p>];
              this.setState({politic:politic});
  });
}  
fetchRandom () {
        fetch('https://api.chucknorris.io/jokes/random')
          .then(results => {    
            return results.json();
          })
          .then(data => {
              let joke = [<p>{data.value}</p>];
              this.setState({joke:joke});
  });
}  
  render () {
    return (
            <div className="container-fluid">
                    <div className="row top">
                        <div className="col-md-12 text-center ">
                        <h2>{this.state.joke}{this.state.music}{this.state.politic}{this.state.travel}{this.state.animal}{this.state.career}{this.state.money}{this.state.fashion}{this.state.sport}{this.state.science}{this.state.celebrity}{this.state.movie}</h2>
                        </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-2">
                            <button onClick={() => this.fetchMusic()} className="button red"><p>Music</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => this.fetchRandom()} className="button red"><p>Random</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => this.fetchMovie()} className="button red"><p>Movies</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => this.fetchCelebrity()} className="button red"><p>Celebrity</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => this.fetchScience()} className="button red"><p>Science</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => this.fetchSport()} className="button red"><p>Sport</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                        </div>                   
                        <div className="row mt">
                            <div className="col-md-2">
                            <button onClick={() => this.fetchFashion()} className="button red"><p>Fashion</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => this.fetchMoney()} className="button red"><p>Money</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => this.fetchCareer()} className="button red"><p>Career</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => this.fetchAnimal()} className="button red"><p>Animal</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => this.fetchTravel()} className="button red"><p>Travel</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => this.fetchPolitical()} className="button red"><p>Political</p>
                            <span className="button2">Click Me!</span>
                            </button>
                            </div>
                        </div>                   
                    </div>
            
            );
}
}
        
const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
