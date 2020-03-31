import React, {Component} from 'react';
import './twitter.css';


class Tweet extends Component{
    render(){
        return(
            <div className="tweet">
                
                <ImageComp/>
                
                <div className='content'>
                    <Author name={this.props.user.name}/><Time/>
                    <Message message={this.props.user.message}/>
                    
                    <div className="buttons" >
                       
                        <ReplyButton/>
                        <RetweetButton/>
                        <LikeButton likes={this.props.user.likes}/>
                        <Share/>
                        <HideTweet OnDelete={this.props.OnDelete} id={this.props.user.id}/>
                                             
                    </div>
                </div>
                
            </div>
        );
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
                <span className="name">{this.props.name}</span>
                <span className="handle">@{this.props.name}</span>
            </span>
        );
    }
}

class Message extends Component{
    render(){
        return(
            <div className="message">
                {this.props.message}
            </div>
        );
    }
}

class LikeButton extends Component{

    
    state={
        likes:this.props.likes
    };



    like_action=()=>{
        this.setState({likes:this.state.likes+1});
        
    }

    render(){
        return (
            
            <i onClick={this.like_action} className={this.changeicon()}>
                    {this.like_counter()}
            </i>  
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

const Time=()=>(<span className='time'>3 h ago</span>)

const ReplyButton=()=>(<i className="fa fa-reply"/>)

const Share=()=>(<i className="fa fa-share-alt" aria-hidden="true"/>)

const RetweetButton=()=>(<i className="fa fa-retweet"/>)


class HideTweet extends Component{
    render(){
        return (
        <i onClick={() => this.props.OnDelete(this.props.id)} className="fa fa-eye-slash">
        </i>
        );
    }    
}

export default Tweet;