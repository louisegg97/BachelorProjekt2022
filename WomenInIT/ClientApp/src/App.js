import React, { Component, Link } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { OmProgrammering } from './components/OmProgrammering';
import { JobMuligheder } from './components/JobMuligheder';
import { SuccesHistorier } from './components/SuccesHistorier';
import { Opgaver } from './components/Opgaver';
import { OmOs } from './components/OmOs';
import { Opgaveside } from './components/opgavesider/Opgaveside';
import { Footer } from './components/Footer';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/omProgrammering' component={OmProgrammering} />
        <Route path='/jobMuligheder' component={JobMuligheder} />
        <Route path='/succesHistorier' component={SuccesHistorier} />
        <Route path='/opgaver' component={Opgaver} />
        <Route path='/omOs' component={OmOs} />
        <Route path='/opgaveside/:id' component={Opgaveside}/>
        <Footer/>
      </Layout>
    );
  }
}
