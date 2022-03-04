import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import {OmProgrammering} from './components/OmProgrammering';
import {JobMuligheder} from './components/JobMuligheder';
import {Succeshistorier} from './components/SuccesHishorier';
import {Opgaver} from './components/Opgaver';
import { omOs } from './components/OmOs';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/omProgrammering' component={OmProgrammering} />
        <Route path='/jobMuligheder' component={JobMuligheder} />
        <Route path='/succesHistorier' component={Succeshistorier} />
        <Route path='/opgaver' component={Opgaver} />
        <Route path='/omOs' component={omOs} />
      </Layout>
    );
  }
}
