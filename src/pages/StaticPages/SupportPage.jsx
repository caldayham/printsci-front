import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/currentPageRedux';
import { MainContainer } from '../../tools/globalStyles'

const SupportPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      const updatePage = () => {
        dispatch(changePage("support"));
      };
      updatePage();
    });

  return (
    <MainContainer>SupportPage</MainContainer>
  )
}

export default SupportPage