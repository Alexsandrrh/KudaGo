import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import { getEvent, clearReducerEvent } from '../../actions/event';
import Skeleton from 'react-loading-skeleton';
import './EventPage.scss';
import upperCaseTitle from '../../utils/upperCaseTitle';
import EventPreview from '../../components/EventPreview/EventPreview';
import EventPreviewCategory from '../../components/EventPreview/EventPreviewCategory';

class EventPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getEvent(this.props.match.params.id);
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
      body_text,
      title,
      description,
      images,
      categories
    } = this.props.event;

    return (
      <Layout>
        <div className="event-page">
          <div className="event-page__container">
            <EventPreview images={images}>
              <EventPreviewCategory categories={categories} />
            </EventPreview>
            <div className="event-page__head">
              <h2 className="event-page__title">
                {upperCaseTitle(title) || <Skeleton />}
              </h2>
              {description ? (
                <div
                  className="event-page__description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              ) : (
                <Skeleton count={3} />
              )}
            </div>

            {body_text ? (
              <div
                ref={e => (this.body = e)}
                className="event-page__content"
                dangerouslySetInnerHTML={{
                  __html: this.getCorrectBody(body_text)
                }}
              />
            ) : (
              <Skeleton count={15} />
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

EventPage.propTypes = {
  event: PropTypes.object.isRequired,
  clearReducerEvent: PropTypes.func.isRequired,
  getEvent: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    event: state.event
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvent: id => dispatch(getEvent(id)),
    clearReducerEvent: () => dispatch(clearReducerEvent())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventPage);
