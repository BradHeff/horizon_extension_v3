import React from 'react'
import './App.css'
import Layout from './HOC/Layout';
import Panel from './components/Panel/Panel';
import PanelLinks from './components/Panel_Links/PLinks';
var option = null
class App extends React.Component {  
  render() {    
    option = localStorage.getItem('option')
    if (option === null) {
      option = "Students"
      localStorage.setItem('option', option)
    }
    return (
      <Layout>
        <Panel />
        <PanelLinks option={option} />
      </Layout>
    );
  }
}

export default App
