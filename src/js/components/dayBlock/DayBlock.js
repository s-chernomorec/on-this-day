import React, {Component} from "react";
import PropTypes from "prop-types";

import DayNavigationButton from './DayNavigationButton';
import DayContent from './DayContent';
import Fade from '../other/Fade';
import Frame from '../common/Frame';
import helpers from "../../helpers";

const {monthAsString} = helpers;

class DayBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldDisplayDescription: false
    };

    this.prevDay = this.prevDay.bind(this);
    this.nextDay = this.nextDay.bind(this);
    this.displayDescriptionIfMobile = this.displayDescriptionIfMobile.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.displayDescriptionIfMobile);
    this.displayDescriptionIfMobile()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.displayDescriptionIfMobile);
  }

  prevDay() {
    this.props.navigateToDate(-1);
  }

  nextDay() {
    this.props.navigateToDate(1);
  }

  displayDescriptionIfMobile() {
    if (document.documentElement.clientWidth <= 720) {
      this.setState({shouldDisplayDescription: false});
    } else {
      this.setState({shouldDisplayDescription: true});
    }
  }

  render() {
    const date = monthAsString(this.props.activeDate.getMonth()) + " " + this.props.activeDate.getDate();

    return (
      <Frame customClass="day-block" frameWrapperClass="day-block-wrapper">
        <DayNavigationButton
          navigate={this.prevDay}
          customClass="day-navigation-prev"
          faClass="fa-angle-left" />
        <Fade inProp={!this.props.pageIsLoading}>
          <DayContent
            date={date}
            shouldDisplayDescription={this.state.shouldDisplayDescription}
            description={this.props.description} />
        </Fade>
        <DayNavigationButton
          navigate={this.nextDay}
          customClass="day-navigation-next"
          faClass="fa-angle-right" />
      </Frame>
    );
  }
};

DayBlock.propTypes = {
  navigateToDate: PropTypes.func.isRequired,
  activeDate: PropTypes.instanceOf(Date).isRequired,
  description: PropTypes.string.isRequired,
  pageIsLoading: PropTypes.bool.isRequired
}

export default DayBlock;
