import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import './EventPage.scss';
import EventPreview from '../../components/EventPreview/EventPreview';
import EventPreviewCategory from '../../components/EventPreview/EventPreviewCategory';
import { getEvents } from '../../actions/events';
import EventPreviewAge from '../../components/EventPreview/EventPreviewAge';
import EventPreviewBtnFavorite from '../../components/EventPreview/EventPreviewBtnFavorite';

class EventPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getEvents();
    window.scrollTo(0, 0);
  }

  getCorrectBody(string) {
    const correctString = String(string).replace(
      /(src=")/gm,
      `src="https://kudago.com`
    );

    return correctString;
  }

  render() {
    const {
      bodyText,
      title,
      description,
      image,
      id,
      category,
      ageRestriction
    } = this.props.event;

    return (
      <Layout sidebar={<div></div>}>
        <div className="event-page">
          <div className="event-page__container">
            <EventPreview image={image}>
              <EventPreviewAge age={ageRestriction} />
              <EventPreviewCategory category={category} />
              <EventPreviewBtnFavorite eventID={id} object={this.props.event} />
            </EventPreview>
            <div className="event-page__head">
              <h2 className="event-page__title">{title}</h2>
              <div
                className="event-page__description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            <div
              className="event-page__content"
              dangerouslySetInnerHTML={{
                __html: this.getCorrectBody(bodyText)
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

EventPage.propTypes = {
  event: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    event:
      state.events.find(event => event.id === Number(props.match.params.id)) ||
      {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(getEvents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventPage);
