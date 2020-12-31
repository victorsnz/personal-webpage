import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Pages
import Home   from './pages/Home';
import Resume   from './pages/Resume';
import NotFound   from './pages/NotFound';
import UnderConstruction   from './pages/UnderConstruction';
// import Blog from './paged/Blog';
//import EightBits   from './pages/8bits';

// import './App.css';

// Fontawesome 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


//Icons
library.add(fab, fas, far);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Victor',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Resume', path: '/resume'},
        {title: 'Blog', path: '/blog'},
      ],
      home: {
        title: 'Victor Sanchez',
        subTitle: 'A web developer interested in making cool stuff for cool people.'
      },
      resume: {
        title: 'Resume'
      },
      blog:{
        title: 'Blog'
      }
    }
  }
  
  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
                <Switch>
                  <Route path="/" exact render={() => 
                    <Home title={this.state.home.title} 
                          subTitle={this.state.home.subTitle}
                          text={this.state.home.text} />}
                  />
                  <Route path="/resume" render={() => 
                    <Resume/> } 
                  />
                  <Route path="/blog" render={() => 
                    <UnderConstruction title={this.state.blog.title} />}
                  />
                  <Route component={NotFound}/>
                </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
