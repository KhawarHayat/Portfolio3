import React, { Component } from 'react'
import '../Scss/Message.scss'
import emailjs from 'emailjs-com';
 


class Message extends Component {
    state = {
        done: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        const templateParams = {
            subject: this.state.subject,
            name: this.state.name,
            email:this.state.email,
            message: this.state.message
        };
         
        emailjs.send('service_hquywat','template_nyhvwgh', templateParams, 'user_yi24vjwfQcemFB6SuJBi1')
            .then((response) => {
               this.setState({
                   done: true
               })
            });
        
        // axios.request({
        //     method: 'POST',
        //     url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
        //     headers: {
        //       'content-type': 'application/json',
        //       'x-rapidapi-key': '5914e4982bmsh6d3b96ad85cab93p1cf666jsncdefbc3986af',
        //       'x-rapidapi-host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
        //     },
        //     data: {
        //       personalizations: [{to: [{email: 'khawarhayat1997@gmail.com'}], subject: this.state.subject}],
        //       from: {email: this.state.email},
        //       content: [{type: 'text/plain', value: this.state.message}]
        //     }
        //   }).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
    }
    
    render() {
        // var options = ;
          if(this.state.done){
              return(
                  <div className='Done'>
                  <p>Message has been sent.</p>
                  </div>
              )
          }
          
        return (
            <div className='Message'>
                <div className='nameAndEmail'>
                    <input className='input' placeholder='Name' type='text' name='name' value={this.state.value} onChange={this.handleChange} required />
                    <input className='input' placeholder='Email' type='email' name='email' value={this.state.value} onChange={this.handleChange} required />
                </div>
                <input className='input subject' placeholder='Subject' type='text' name='subject' value={this.state.value} onChange={this.handleChange} required />
                <textarea className='textArea' placeholder='Message' type='text' name='message' value={this.state.value} onChange={this.handleChange} required />
                <button className='Button' onClick={this.onSubmit}>Send Message</button>
            </div>
        );
    }
}

export default Message;