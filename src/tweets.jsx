import React, {Component} from 'react';
import Tweet from './tweet.jsx';

class Tweets extends Component{
    state={
        users:[
            {id:1, name:"sanix", message:"je t'aime Lee ", likes:3},
            {id:2, name:"Lee", message:"Love u too", likes:4}
        ]   
    };

    HandleDelete = user_id => {
        const users=this.state.users.filter(user => user.id !==user_id)
        this.setState({users});
    };

    render(){
        return(
            this.state.users.map(user => <Tweet id={user.id} key={user.id} OnDelete={this.HandleDelete} name={user.name} message={user.message} likes={user.likes} />)
        )
    }
};

export default Tweets;