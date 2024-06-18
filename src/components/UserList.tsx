import { Component } from 'react'
import User from './User';

export interface IUserJson {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

interface IUserListState {
    users: IUserJson[],
    isLoading: boolean
  }

// rce = React class export
// da UserList keine props empfängt => empty-object mit Record<string, never> (props-Tipisierung) definieren, dann kommt (state-Tipisierung) :
export class UserList extends Component<Record<string, never>, IUserListState > {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            users: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ ...this.state, isLoading: true })
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data, isLoading: false })
            })
    }

    render() {
        const { users, isLoading } = this.state;
        /*
                if (isLoading) {
                    return <div> Loading... </div>;
                }
                return (
                    <div>
                        {users.map((user) => (
                            <p key={user.id}>
                                {user.name}
                            </p>
                        ))}
                    </div>
                )
            }
            */

        return isLoading ? (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        ) : (
            <div>
                {users.map((user) => (
                    <User
                       key={user.id}
                       person={user} 
                    />
                ))}
            </div>
        );
    }
}

export default UserList
