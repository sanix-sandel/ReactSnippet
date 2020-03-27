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

    
    state={
        likes:0
    };

    like_action=()=>{
        this.setState({likes:this.state.likes+1});
        
    }

    render(){
        return (
            <div>
                <button className="btn btn-primary" onClick={this.like_action}>
                    <i className={this.changeicon()}>
                        {this.like_counter()}
                    </i>  
                </button>
                
            </div>       
        );
    }

    like_counter =()=>{
        return this.state.likes;
    }

    changeicon=()=>{
        let classes="fa ";
        return classes+=this.state.likes===0 ? "fa-thumbs-up":"fa-heart";
    }

}


export default Tweet;