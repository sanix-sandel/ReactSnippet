import React, {Component} from 'react';
import './twitter.css';


class Tweet extends Component{
    render(){
        return(
            <div className="tweet">
                
                <ImageComp/>
                <div className='content'>
                    <Author/>
                    <Message/>
                    <div className="buttons" >
                        <LikeButton/>
                    </div>
                </div>
                
            </div>
        )
    }
}


class ImageComp extends Component{
    render(){
        return (
            <img 
                src="https://www.gravatar.com/avatar/nothing"
                className="avatar"
                alt="avatar" />
            );
    }
    
}

class Author extends Component{
    render(){
        return (
            <span className="author">
                <span className="name">Sanix</span>
                <span className="handle">@sanix</span>
            </span>
        );
    }
}

class Message extends Component{
    render(){
        return(
            <div className="message">
                This is my first tweet !
            </div>
        );
    }
}


class LikeButton extends Component{
    render(){
        return (
            <i className="fa fa-heart like-button" /> 
        );
    }
}


export default Tweet;