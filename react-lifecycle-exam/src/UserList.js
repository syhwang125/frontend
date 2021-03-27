import React, { Component } from 'react';
import { Button, List, ListItemText} from '@material-ui/core';
import axios from 'axios';     // server - http communication

class UserList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users : [{
                id : '',
                name : '',
            }]
        }
    }

    loadUsers() {
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then( response => {
                 this.setState({
                     users : response.data
                 });
             });
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(nextProps.title !== prevState.title) {
    //         return { title : nextProps.title}
    //     }
    //     return null; 
    // }
    
    componentDidMount() {           // 컴포넌트가 마운트된 후 바로 호출됨
        this.loadUsers();
    }

    render() {
        const userList = this.state.users.map ( user => {
            return <ListItemText primary={user.name} key={user.id} />
        })


        return (
            <div>
               {/* <Button 
                    onClick = { this.loadUsers.bind(this) } 
               variant='contained' color='primary'> Load </Button> */}
                <List>
                    {userList}
                </List>
            </div>
        )
    }
}

export default UserList; 