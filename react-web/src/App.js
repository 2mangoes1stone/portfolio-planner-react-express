import React, { Component } from 'react';
import './App.css';
import ProjectList from './components/ProjectList'



class App extends Component {
  state = {
    projects: null
  }
  render() {
    const { projects } = this.state
    return (
      <div className="App">
        {
          // ![] = false
          // !![] = true
          // !null = true
          // !!null = false
          !!projects ? (
            <ProjectList items={projects} />
          ) : (
            'Loading projects...'
          )
        }
      </div>
    );
  }

// Run after our component first appears on screen
  componentDidMount() {
    // Load projects from API
    fetch('/projects')
    // Parsing the JSON into into Javascript objects
    .then(res => res.json())
    // Update our component's state with the loaded projects
    .then(json => {
      // Changing the state will re-render the component
      this.setState({
        projects: json
      })
    })
  }
}

export default App;
