import React, {Component} from 'react';
import Tweet from './tweet.jsx';

class Tweets extends Component{
    users=[
        {name:"sanick", message:"je t'aime Lee "},
        {name:"Lee", message:"Love u too"}
    ]

    render(){
        return(
            this.users.map(user => <Tweet name={user.name} message={user.message}/>)
        )
    }
};

export default Tweets;