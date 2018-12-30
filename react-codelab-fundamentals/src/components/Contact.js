import React from 'react';
import ContactInfo from './ContactInfo'; 

export default class Contact extends React.Component {

    constructor(props) {
        super(prope) ;
        this.state = {
            keyword : '',
            contactData : [{
                 name : 'Albert',
                 phone : '010-111-0001'
            }, {
                name : 'Betty',
                phone : '010-222-0002'
            } , { 
                name : 'Charlie',
                phone : '010-333-0003'
            }, {
                name : 'David',
                phone : '010-444-0004'
            }]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick

    render(){
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase.indexOf(this.state.keyword) > -1;
                });
            return data.map((contact, i) => {
                return (<ContactInfo contact = {contact} key = {i}/>);
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input name="keyword" placeholder="Search"
                value={this.state.keyword}
                onChange={this.handleChange}
                />
            </div>
        )
    }
}