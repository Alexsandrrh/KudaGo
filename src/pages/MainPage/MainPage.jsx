import React, { Component } from 'react';

import EventsList from '../../containers/EventsList/EventsList';
import Layout from '../../components/Layout/Layout';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Layout>
        <EventsList />
      </Layout>
    );
  }
}

export default MainPage;
