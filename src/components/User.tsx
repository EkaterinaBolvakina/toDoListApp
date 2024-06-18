import { Component } from 'react'
import {IUserJson}  from './UserList';

export class User extends Component< {person: IUserJson} > {

    render() {

        const { name, email, website, address: { city, street, suite }, company: { name: companyName } } = this.props.person;
        return (
            <div className="card" style={{ width: '580px', margin: '8px auto', backgroundColor: 'rgba(var(--bs-tertiary-bg-rgb)' }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ margin: '2px 1px 8px 1px' }}>Company: {companyName}</h5>
                    <div>{website}</div>
                    <div style={{ margin: '20px 1px 8px 1px' }}><h2>{name}</h2></div>
                    <div>{email}</div>
                    <div style={{ margin: '20px 1px 8px 1px' }}>Address:
                        <div>{city}</div>
                        <div>{street}, {suite} </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;