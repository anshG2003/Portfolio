import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Heading } from "../common/Heading"
import { contact } from "../data/dummydata"

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pef4513', 'template_rb2d8vf', form.current, {
        publicKey: 'J7-pNUBTfOYxKPk39',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Keep In Touch' />
          <div className='content flexsb'>
            <div className='right'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='flex'>
                  <input type='text' name="to_name" placeholder='Name' data-aos='flip-left' />
                  <input type='email' name="from_name" placeholder='Email' data-aos='flip-right' />
                </div>
                <input type='message' placeholder='Subject' data-aos='flip-up' />
                <textarea name='message' id='' cols='30' rows='10' data-aos='flip-down'></textarea>
                <button data-aos='zoom-in-up'>Submit</button>
              </form>
            </div>
            <div className='left'>
              {contact.map((item) => (
                <div className='box' data-aos='zoom-in'>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
