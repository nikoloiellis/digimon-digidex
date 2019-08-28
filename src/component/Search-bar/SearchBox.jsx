import React, {Component} from 'react';
import '../Search-bar/search-box.styles.css'



export class SearchBox extends Component {
  render() {
    return (
        <input 
        type="searchbar" 
        onChange={this.props.handleChange} 
        placeholder={this.props.placeholder}
        className='search'
        />
    );
  }
}




  export default SearchBox;