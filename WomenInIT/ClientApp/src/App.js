import React, { Component, Link } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { OmProgrammering } from './components/OmProgrammering';
import { Frontend} from './components/Frontend';
import { Backend } from './components/Backend';
import { Database } from './components/Database';
import { JobMuligheder } from './components/JobMuligheder';
import { SuccesHistorier } from './components/SuccesHistorier';
import { Opgaver } from './components/Opgaver';
import { OmOs } from './components/OmOs';
import { Opgaveside } from './components/opgavesider/Opgaveside';
import { Footer } from './components/Footer';
import { FrontendOpg } from './components/FrontendOpg.js';
import { BackendOpg } from './components/BackendOpg.js';
import { DatabaseOpg } from './components/DatabaseOpg.js';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/omProgrammering' component={OmProgrammering} />
        <Route path='/frontend' component={Frontend} />
        <Route path='/backend' component={Backend} />
        <Route path='/database' component={Database} />
        <Route path='/jobMuligheder' component={JobMuligheder} />
        <Route path='/succesHistorier' component={SuccesHistorier} />
        <Route path='/opgaver' component={Opgaver} />
        <Route path='/omOs' component={OmOs} />
        <Route path='/opgaveside/:id' component={Opgaveside}/>
        <Route path='/FrontendOpg' component={FrontendOpg}/>
        <Route path='/BackendOpg' component={BackendOpg}/>
        <Route path='/DatabaseOpg' component={DatabaseOpg}/>
        <Footer/>
      </Layout>
    );
  }
}
