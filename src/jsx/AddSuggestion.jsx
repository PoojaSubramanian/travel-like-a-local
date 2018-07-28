import React from 'react';

class AddSuggestion extends React.Component {
  constructor(props) {
    super(props);
    this.handleSuggestionSubmit = this.handleSuggestionSubmit.bind(this);
    this.destinationOptionChange = this.destinationOptionChange.bind(this);
    this.handleSugNameInputChange = this.handleSugNameInputChange.bind(this);
    this.handleSugLinkInputChange = this.handleSugLinkInputChange.bind(this);
    console.log('destinations...', this.props);
    this.state = {
      // destinationOption: this.props.destinations[0].destinationName,
      destinationOption: '',
      suggestionName: '',
      suggestionLink: ''
    };
  }

  // componentDidMount() {
  //   console.log('destinations...', this.props.destinations);
  //   this.setState({ destinationOption: this.props.destinations[0].destinationName });
  // }


  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if ( JSON.stringify(this.props.destinations) !== JSON.stringify(prevProps.destinations) ) {
      this.setState({ destinationOption: this.props.destinations[0].destinationName });
    }
  }

  handleSugNameInputChange(e) {
    this.setState({ suggestionName: e.target.value });
  }

  handleSugLinkInputChange(e) {
    this.setState({ suggestionLink: e.target.value });
  }

  handleSuggestionSubmit(e) {
    e.preventDefault();
    this.props.handleAddSuggestion(this.state.destinationOption, this.state.suggestionName, this.state.suggestionLink);
    this.setState({ suggestionName: '', suggestionLink: '' });
  }

  destinationOptionChange(e) {
    this.setState({ destinationOption: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.friendsToAdd[0]) {
    //   this.setState({destinationOption: nextProps.friendsToAdd[0].username});
    // }
  }

  render() {
    //console.log('line 27', this.props);
    console.log('in AddSuggestion render()...this.props...', this.props);
    return (
      <div>
        <form onSubmit={this.handleSuggestionSubmit}>
          <hr />
          <select onChange={this.destinationOptionChange} value={this.state.destinationOption}>
            {this.props.destinations.map((destination) => <option value={destination.destinationName} key={destination.destinationName}>{destination.destinationName}</option>)}
          </select>
          <input className="comment-input" placeholder="Add Your Comment To Selected Destination" type="text" value={this.state.suggestionName} onChange={this.handleSugNameInputChange} required />
          <hr />
          <input placeholder="Add Your Link" type="text" value={this.state.suggestionLink} onChange={this.handleSugLinkInputChange} required />
          <input type="submit" value="Submit" />
          <hr />
        </form>
      </div>
    );
  }
}

export default AddSuggestion;