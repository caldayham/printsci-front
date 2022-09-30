import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ContactForm from '../../components/Forms/ContactForm';
import { changePage } from '../../redux/currentPageRedux';
import {MainContainer} from "../../tools/globalStyles";

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
        <ContactForm/>
    </MainContainer>
  )
}

export default ContactPage