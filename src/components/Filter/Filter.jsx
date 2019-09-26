import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';
import { connect } from 'react-redux';
import Checkbox from '../Common/Checkbox/Checkbox';
import getCategory from '../../utils/getCategory';
import { getFilterEvents } from '../../actions/events';
import Icon from '../Common/Icon/Icon';
import Arrow from '../../assets/icons/corner-right-down.svg';
import FilterSection from './FilterSection';
import Select from '../Common/Select/Select';
import { FROM_LOW_TO_HIGH, NOT_STATED, FROM_HIGH_TO_LOW } from '../../contants';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      sortType: 'NOT_STATED',
      filterIsClose: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('CLick');
    this.setState({ filterIsClose: !this.state.filterIsClose });
  }

  onChangeCategory(e, category) {
    let data = null;
    const state = this.state;

    if (e.target.checked) {
      data = [...state.categories, category];
      this.setState({
        categories: data
      });
    } else {
      data = state.categories.filter(item => item !== category);
      this.setState({
        categories: data
      });
    }

    this.props.getFilterEvents({ ...state, categories: data });
  }

  onChangeSortType(e) {
    const value = e.target.value;
    this.setState({ sortType: value });
    this.props.getFilterEvents({ ...this.state, sortType: value });
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="filter">
        <div
          className={
            this.state.filterIsClose
              ? 'filter-container -close'
              : 'filter-container'
          }
        >
          <div className="filter-container__head" onClick={this.handleClick}>
            <h3 className="filter-container__head-title">Фильтр</h3>
            <Icon className="filter-container__head-icon" icon={Arrow} />
          </div>
          <div className="filter-container__body">
            <FilterSection title="Сортировка">
              <Select
                className="filter-container__body-select"
                onChange={e => {
                  this.onChangeSortType(e);
                }}
              >
                <option value={NOT_STATED}>Не важно</option>
                <option value={FROM_LOW_TO_HIGH}>От дешевых к дорогим</option>
                <option value={FROM_HIGH_TO_LOW}>От дорогих к дешевым</option>
              </Select>
            </FilterSection>

            <FilterSection title="Категории">
              {categories.map((category, index) => {
                return (
                  <Checkbox
                    key={index}
                    id={category}
                    onChange={e => {
                      this.onChangeCategory(e, category);
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
      getFilterEvents: state => dispatch(getFilterEvents(state))
    };
  }
)(Filter);
