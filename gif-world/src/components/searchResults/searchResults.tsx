import React, { Component } from "react";
import "./searchResults.css";
import Spinner from 'react-spinner-material';
import { AiFillCloseCircle } from 'react-icons/ai';
import { RiChatDownloadFill } from 'react-icons/ri';

class SearchResults extends Component<{dataFromParent: string}, {}> {
    state = {
        dataFromParent: "",
        items: [],
        url: "",
        isLoaded: false
    }
    displayModal = false

    componentDidMount() {
        this.generateRandomGifs();
        
    }
    generateRandomGifs() {
        fetch("http://api.giphy.com/v1/gifs/trending?gif-world&api_key=v39kGDxRW44cU2PinH70vVVl764cftGM&limit=20")
                .then(res => res.json())
                .then(result => {
                    this.setState({
                    dataFromParent: "",
                    items: result.data,
                    isLoaded: true
                    });
                });
        
    }
    componentDidUpdate(prevProps:any) {
        if (this.props.dataFromParent !== prevProps.dataFromParent) {
            if (this.props.dataFromParent.length === 0) {
                this.generateRandomGifs();
            } else {
                fetch(`http://api.giphy.com/v1/gifs/search?q=${this.props.dataFromParent}&api_key=v39kGDxRW44cU2PinH70vVVl764cftGM&limit=20`)
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        dataFromParent: this.props.dataFromParent,
                        items: result.data,
                        isLoaded: true,
                    });
                })
            }
            
        }
    }

    openGif(url:any) {
        this.displayModal = !this.displayModal;
        if (this.displayModal) {
            this.setState({
                url: url
            })
            document.getElementById("modal")?.classList.remove("displayNone");
        } else {
            this.setState({
                url: ""
            })
            document.getElementById("modal")?.classList.add("displayNone");
        }
    }

    async downloadImage(imageSrc: any) {
        const image = await fetch(imageSrc)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
      
        const link = document.createElement('a')
        link.href = imageURL
        link.download = 'gif'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    render () {
        // !this.props.dataFromParent && !this.isLoaded ? {}
        if (this.props.dataFromParent==="" || this.state.isLoaded) {
            return (
                <div>
                    <div className="searchResults">
                    {this.state.items.map((item:any) => (
                        <div key={item.id}>
                            <img onClick={() => {this.openGif(item.images.original.url)}} src={item.images.fixed_width.url} className="image"></img>
                        </div>
                    ))}
                    </div>
                    <div className='modal displayNone' id="modal">
                        <div className="buttons">
                            <div></div>
                            <RiChatDownloadFill className="button" onClick={() => this.downloadImage(this.state.url)}>Download</RiChatDownloadFill>
                            <AiFillCloseCircle className="button" onClick={() => this.openGif("")}>Close</AiFillCloseCircle>
                        </div>  
                        <div className="gifImage">
                            <img src={this.state.url}/>
                        </div>   
                    </div>
                </div>
                
            )
        } else {
            return (
                <div className="loading">
                    <Spinner size={180} color={"#c31bde"} visible={true} radius={4} stroke={""} />
                </div>
            )
        }
            
    }
}

export default SearchResults;