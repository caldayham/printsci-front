import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ContactForm from '../../components/Forms/ContactForm';
import { changePage } from '../../redux/currentPageRedux';
import {
  MainContainer,
  Title,
} from "../../tools/globalStyles";

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
      <Title>Contact Print Sci</Title>
        <ContactForm/>
    </MainContainer>
  )
}

export default ContactPage