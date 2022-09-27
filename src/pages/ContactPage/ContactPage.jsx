import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/currentPageRedux';
import {MainContainer} from "../../tools/globalStyles";
import { ContactFormWrapper } from './contactPageStyles';

const ContactPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      const updatePage = () => {
        dispatch(changePage("contact"));
      };
      updatePage();
    });

  return (
    <MainContainer flexDirection="column">
        <ContactFormWrapper>
            Contact Form!
        </ContactFormWrapper>
    </MainContainer>
  )
}

export default ContactPage