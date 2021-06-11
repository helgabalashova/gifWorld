import React, { Component } from "react";
import ReactDom from "react-dom";

import "./searchBar.css"

class SearchBar extends Component<{parentCallback: any},{searchString:string}> {
    
    state = {
        searchString: ""
    }
    onInputChange(event:any) {
        this.setState({searchString: event.target.value}, this.sendData);
    }

    sendData = () => {
        this.props.parentCallback(this.state.searchString);
    }

    render() {
        return (
            <div className="searchBar" id="searchBar">
                <input
                    className="input"
                    name = "searchString"
                    type = "text"
                    onChange={this.onInputChange.bind(this)}
                    placeholder="Input gif to search"
                    value={this.state.searchString}
                ></input>
            </div>
        );
    }
}

export default SearchBar;