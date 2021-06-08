import React from "react"

class SearchResults extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.someVar.map(l => (
                        <li>{l}</li>
                    ))
                }
            </ul>
        );
    }
}

export default SearchResults