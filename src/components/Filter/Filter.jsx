import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';
import { connect } from 'react-redux';
import Checkbox from '../Common/Checkbox/Checkbox';
import getCategory from '../../utils/getCategory';
import { getFilterEvents } from '../../actions/events';

const FilterSection = ({ children, title }) => {
  return (
    <div className="filter-section">
      <h4 className="filter-section__title">{title}</h4>
      <div className="filter-section__body">{children}</div>
    </div>
  );
};

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="filter">
        <div className="filter-container">
          <div className="filter-container__head">
            <h3 className="filter-container__head-title">Фильтр</h3>
          </div>
          <div className="filter-container__body">
            <FilterSection title="Категории">
              {categories.map((category, index) => {
                return (
                  <Checkbox
                    key={index}
                    id={category}
                    onChange={e => {
                      let data = null;

                      if (e.target.checked) {
                        data = [...this.state.categories, category];
                        this.setState({
                          categories: data
                        });
                      } else {
                        data = this.state.categories.filter(
                          item => item !== category
                        );
                        this.setState({
                          categories: data
                        });
                      }

                      this.props.getFilterEvents(data);
                    }}
                  >
                    {getCategory(category)}
                  </Checkbox>
                );
              })}
            </FilterSection>
          </div>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  categories: PropTypes.node
};

export default connect(
  state => {
    return {
      categories: state.categories.map(category => category.slug)
    };
  },
  dispatch => {
    return {
      getFilterEvents: categories => dispatch(getFilterEvents(categories))
    };
  }
)(Filter);
