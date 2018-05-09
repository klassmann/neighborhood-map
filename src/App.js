// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import React, { Component } from 'react';

import MapContainer from './Container';
import ToggleButton from './ui/ToggleButton';

import { PLACES } from './data/Data'
import { PlaceCategories } from './data/Data'

class App extends Component {

  constructor(props) {
    super(props);
    this.onToggleOn = this.onToggleOn.bind(this);
    this.onToggleOff = this.onToggleOff.bind(this);
    this.state = { searchValue: '', places: PLACES, filterValues: [] };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filterValues.length !== this.state.filterValues.length) {
      this.updatePlaces();
    }
  }

  updatePlaces() {
    if (this.state.filterValues.length === 0) {
      this.setState({ places: PLACES });
      return;
    }

    let places = PLACES.filter((item) => {
      return this.state.filterValues.includes(item.type);
    });
    this.setState({ places: places });
  }

  addToFilter(value) {
    var values = this.state.filterValues;
    values.push(value);
    this.setState({filterValues: values});
  }

  removeFromFilter(value) {
    var values = this.state.filterValues;
    this.setState({
      filterValues: values.filter((item) => {
        return item !== value;
      })
    });
  }

  onToggleOn(value) {
    this.addToFilter(value);
    this.updatePlaces();
  }

  onToggleOff(value) {
    this.removeFromFilter(value);
  }

  renderCategories() {
    return PlaceCategories.map((item, index) => {
      return <ToggleButton
        key={index}
        onToggleOn={this.onToggleOn} 
        onToggleOff={this.onToggleOff} 
        id={item.id} 
        icon={item.icon} 
        text={item.title} />
    });
  }

  render() {
    return (
      <div>
        <MapContainer places={this.state.places} />
        <div className="side-bar">
        {this.renderCategories()}
        </div>
      </div>
    );
  }
}

export default App;
