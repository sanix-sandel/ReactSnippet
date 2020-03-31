import React, {Component} from 'react';
import Tweet from './tweet.jsx';

class Tweets extends Component{
    state={
        users:[
            {id:1, name:"sanix", message:"je t'aime Lee ", likes:3},
            {id:2, name:"Lee", message:"Love u too", likes:4},
            {id:3, name:"Jesna", message:"Life is what you make it", likes:1230},
            {id:4, name:"Neldie", message:"Believe, you can achieve", likes:12003},
            {id:5, name:"Jaelle", message:"There's only one life", likes:1130}
        ]   
    };

    HandleDelete = user_id => {
        const users=this.state.users.filter(user => user.id !==user_id)
        this.setState({users});
    };

    render(){
        return(
            this.state.users.map(user => <div className="card"><Tweet OnDelete={this.HandleDelete} user={user} key={user.id}/>
            </div>)
            
        )
    }
};

export default Tweets;