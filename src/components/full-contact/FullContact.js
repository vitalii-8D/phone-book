import React, {Component} from 'react';
import {ModalWindow} from "../modal-window/ModalWindow";
import {connect} from 'react-redux';
import {withRouter} from "react-router";

import './FullContact.scss';
import {Link} from "react-router-dom";

class FullContact extends Component {
   state = {
      editMode: false,
      eraseMode: false,
      history: []
   }

   componentDidMount() {
      const {match: {params: {id}}, contacts} = this.props;
      const contact = contacts.find(item => id === item.id);
      this.setState({
         contact,
         history: [contact]
      })
      debugger
   }

   onEditModeChange = (e) => {
      const modeTarget = e.currentTarget.className.split(' ')[1];
      this.setState({
         editMode: modeTarget
      })
   }

   onEditModeDisable = () => {
      this.setState({
         editMode: false
      })
   }

   onEraseConfirmation = (e) => {
      const eraseTarget = e.currentTarget.className.split(' ')[1];
      this.setState({
         eraseMode: eraseTarget
      })
   }

   onEraseField = (result) => () => {
      this.setState({
         eraseMode: false
      })
      debugger
   }

   render() {
      const {contact, editMode, eraseMode} = this.state || {};
      const {name, avatar, phone, email, address} = contact || {};
      console.log(this.props);

      if (!name || !phone) return null;
      return (
         <div className='full-contact'>
            <div className='full-contact-header'>
               <div className='full-contact-header-name'>{name}</div>
               <div className='full-contact-header-image'>
                  <img src={avatar} alt={name}/>
               </div>
            </div>

            <div className='full-contact-info'>
               <div className='full-contact-info-phone'>
                  <div className='full-contact-info-phone-label label'>Phone:</div>
                  <div className='full-contact-info-phone-value value'>{phone}</div>

                  {(editMode === 'phone') && (
                     <input type="text" name='phone' className='edit-input' value={phone}/>
                  )}

                  <div className='buttons-area'>
                     {!editMode && !eraseMode && (
                        <button type='button' className='edit-btn phone' onClick={this.onEditModeChange}>
                           <i className="fas fa-edit"></i>
                        </button>
                     )}

                     {(editMode === 'phone') && (
                        <button type='button' className='edit-off phone' onClick={this.onEditModeDisable}>
                           <i className="fas fa-times"></i>
                        </button>
                     )}
                  </div>
               </div>
               <div className='full-contact-info-email'>
                  <div className='full-contact-info-email-label label'>Email:</div>
                  <div className='full-contact-info-email-value value'>{email}</div>

                  {(eraseMode === 'email') && (
                     <div className="confirm-erase-window">
                        <div>Erase this field?</div>
                        <button className="erase-yes" onClick={this.onEraseField('email')}>Yes</button>
                        <button className="erase-no" onClick={this.onEraseField(false)}>No</button>
                     </div>
                  )}

                  {(editMode === 'email') && (
                     <input type="text" name='email' className='edit-input' value={email}/>
                  )}

                  <div className='buttons-area'>
                     {!editMode && !eraseMode && <button type='button' className='edit-btn email' onClick={this.onEditModeChange}>
                        <i className="fas fa-edit"></i>
                     </button>}
                     {!editMode && !eraseMode && <button type='button' className='erase-btn email' onClick={this.onEraseConfirmation}>
                        <i className="fas fa-trash-alt"></i>
                     </button>}

                     {(editMode === 'email') && (
                        <button type='button' className='edit-off email' onClick={this.onEditModeDisable}>
                           <i className="fas fa-times"></i>
                        </button>
                     )}
                  </div>
               </div>
               <div className='full-contact-info-address'>
                  <div className='full-contact-info-address-label label'>Address:</div>
                  <div className='full-contact-info-address-value value'>{address}</div>

                  {(eraseMode === 'address') && (
                     <div className="confirm-erase-window">
                        <div>Erase this field?</div>
                        <button className="erase-yes" onClick={this.onEraseField('address')}>Yes</button>
                        <button className="erase-no" onClick={this.onEraseField(false)}>No</button>
                     </div>
                  )}

                  {(editMode === 'address') && (
                     <input type="text" name='address' className='edit-input' value={address}/>
                  )}

                  <div className='buttons-area'>
                     {!editMode && !eraseMode && <button type='button' className='edit-btn address' onClick={this.onEditModeChange}>
                        <i className="fas fa-edit"></i>
                     </button>}
                     {!editMode && !eraseMode && <button type='button' className='erase-btn address' onClick={this.onEraseConfirmation}>
                        <i className="fas fa-trash-alt"></i>
                     </button>}

                     {(editMode === 'address') && (
                        <button type='button' className='edit-off address' onClick={this.onEditModeDisable}>
                           <i className="fas fa-times"></i>
                        </button>
                     )}
                  </div>
               </div>
            </div>

            <Link to='/contacts' className='back-btn'><i className="fas fa-arrow-left"></i></Link>
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
