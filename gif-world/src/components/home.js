import React from "react"
import SearchResults from "./searchResults"
import Header from "./header"
import Search from "./search"

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {/* <Search/> */}
                <SearchResults someVar={this.someVar}/>
            </div>
        )
    }

    someVar = ["1", "2", "3", "4", "5"]
}
export default Home
