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
    const { filterIsClose } = this.state;
    this.setState({ filterIsClose: !filterIsClose });
  }

  onChangeCategory(e, category) {
    let data = null;
    const { state } = this;
    const { getFilterEvents } = this.props;

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

    getFilterEvents({ ...state, categories: data });
  }

  onChangeSortType(e) {
    const { value } = e.target;
    const { getFilterEvents } = this.props;
    this.setState({ sortType: value });
    getFilterEvents({ ...this.state, sortType: value });
  }

  render() {
    const { categories } = this.props;
    const { filterIsClose } = this.state;

    return (
      <div className="filter">
        <div className={filterIsClose ? 'filter-container -close' : 'filter-container'}>
          <button type="submit" className="filter-container__head" onClick={this.handleClick}>
            <h3 className="filter-container__head-title">Фильтр</h3>
            <Icon className="filter-container__head-icon" icon={Arrow} />
          </button>
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
              {categories.map(category => {
                return (
                  <Checkbox
                    key={`checkbox-key-${category}`}
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
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  getFilterEvents: PropTypes.func.isRequired
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
