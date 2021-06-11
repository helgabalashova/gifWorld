import React, { Component } from "react";
import Header from "./header/header";
import SearchBar from "./searchBar/searchBar";
import SearchResults from "./searchResults/searchResults";
import { Route, Switch } from "react-router-dom";
import About from "./about/about";


class Home extends Component<{},{parentCallback: string}> {
    state = {
        parentCallback: ""
    }

    callbackFunction = (childData:string) => {
        this.setState({parentCallback: childData})     
    }

    render() {
        return (
            // <>
            <Switch>
                <Route exact path="/">
                    <div>
                        <Header></Header>
                        <SearchBar parentCallback = {this.callbackFunction}/>
                        <SearchResults dataFromParent = {this.state.parentCallback} />
                    </div>
                </Route>
                <Route path="/about">
                    <div>
                        <Header></Header>
                        <About />
                    </div>
                </Route>
            </Switch>
            // </>
        );
    }
    
}

export default Home;