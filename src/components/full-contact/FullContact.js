import React, {Component} from 'react';
import {ModalWindow} from "../modal-window/ModalWindow";
import {connect} from 'react-redux';
import {withRouter} from "react-router";

import './FullContact.scss';

class FullContact extends Component {
   componentDidMount() {
      const {match: {params: {id}}, contacts} = this.props;
      const contact = contacts.find(item => id === item.id);
      this.setState({
         contact
      })
      debugger
   }

   render() {
      const {contact} = this.state || {};
      const {name, avatar, phone, email, address} = contact || {};
      console.log(this.props);
      debugger
      if (!name || ! phone) return null;
      return (
         <div className='contact'>
            <div className='contact-header'>
               <div className='contact-header-image'>
                  <img src={avatar} alt={name}/>
               </div>
               <div className='contact-header-name'>{name}</div>
            </div>

            <div className='contact-info'>
               <div className='contact-info-phone'>{phone}</div>
               <div className='contact-info-email'>{email}</div>
               <div className='contact-info-address'>{address}</div>
            </div>

         </div>
      );
   }
}

const mapStateToProps = (state) => {
   const {contacts} = state;

   return {
      contacts: contacts
   }
}

export default withRouter(connect(mapStateToProps)(FullContact));
