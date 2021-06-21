import { Fragment, useState, useEffect, Component } from 'react';
import classes from './UserFinder.module.css';
import Users from './Users';

const DUMMY_USERS = [
    { id: 'u1', name: 'varsha' },
    { id: 'u2', name: 'komal' },
    { id: 'u3', name: 'sanket' },
    { id: 'u4', name: 'vandana' },
    { id: 'u5', name: 'yogesh' },
];

class UserFinder extends Component {
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        // For example sending Http... request
        this.setState({ filteredUsers: DUMMY_USERS })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} className={classes.finder} />
                    <Users users={this.state.filteredUsers} />
                </div>
            </Fragment>
        );
    }
}

//=============== Functional component===========================

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <input type='search' onChange={searchChangeHandler} className={classes.finder} />
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

export default UserFinder;