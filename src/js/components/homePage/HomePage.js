import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PageWrapper from '../common/PageWrapper';
import Header from '../common/Header';
import DayBlock from '../dayBlock/DayBlock';
import EventTypesMenu from '../eventTypesMenu/EventTypesMenu';
import EventsBlock from './EventsBlock';
import Footer from '../common/Footer';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIsLoading: false,
      activeEventTypes: ['events', 'births', 'deaths']
    }

    this.navigateToDate = this.navigateToDate.bind(this);
    this.toggleEventType = this.toggleEventType.bind(this);
  }

  componentWillReceiveProps(next) {
    if (this.props.description !== next.description && this.props.data !== next.data) {
      this.setState({pageIsLoading: false});
    }
  }

  toggleEventType(eventType) {
    const eventTypesArray = this.state.activeEventTypes;
    const filteredArray = eventTypesArray.indexOf(eventType) === -1
      ? [...eventTypesArray, eventType]
      : eventTypesArray.filter(item => item !== eventType);

    this.setState({activeEventTypes: filteredArray});
  }

  navigateToDate(direction) {
    this.setState({pageIsLoading: true});
    this.props.navigateToDate(direction);
  }

  render() {
    return (
      <PageWrapper>
        <Header />
        <DayBlock
          navigateToDate={this.navigateToDate}
          activeDate={this.props.date}
          description={this.props.description}
          pageIsLoading={this.state.pageIsLoading}
        />
        <EventTypesMenu
          activeEventTypes={this.state.activeEventTypes}
          toggleEventType={(eventType) => this.toggleEventType(eventType)}
        />
        <EventsBlock
          data={this.props.data}
          activeEventTypes={this.state.activeEventTypes}
          pageIsLoading={this.state.pageIsLoading}
          activeDate={this.props.date}
        />
        <Footer />
      </PageWrapper>
    );
  }
};

HomePage.defaultProps = {
  data: {}
};

export default HomePage;
