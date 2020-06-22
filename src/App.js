import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MasterForm from './Form/MasterForm.jsx';
import Cart from './Summary/Cart.jsx';
import './App.css';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
  
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
    });

  render() {
    return (
      <div className="App">
         <Header />
        <main className="wrapper">
        <MasterForm 
        features={this.props.features} 
        format={this.USCurrencyFormat.format} 
        selected={this.state.selected} 
        updateFeature={this.updateFeature} 
        />
        <Cart 
        format={this.USCurrencyFormat.format} 
        selected={this.state.selected}
        />
        </main>
      </div>
    );
  };
};

export default App;