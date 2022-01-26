import styled from "styled-components";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container } from "./Container";

import { IoMoonOutline, IoMoon } from 'react-icons/io5';

const HeaderEl = styled.header`
   box-shadow: var(--shadow);
   background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2rem 0;
`;

const Title = styled(Link).attrs({
   to: '/',
})`
   color: var(--colors_text);
   font-size: var(--fs-sm);
   text-decoration: none;
   font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
   color: var(--color-text);
   font-size: var(--fs-sm);
   cursor: pointer;
   /* font-weight: var(--fw-bold); */
   line-height: var(--fs-sm);
   text-transform: capitalize;
`;

export const Header = () => {
   const [theme, setTheme] = useState('light');

   const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }

   useEffect(() => {
      document.body.setAttribute('data-theme', theme)
   }, [theme])
   return (
      <HeaderEl>
         <Container>
            <Wrapper>
               <Title>Where is the world?</Title>
               <ModeSwitcher onClick={toggleTheme}>
                  {theme === 'light' ? (
                     <IoMoonOutline size="14px" />
                  ) : (
                     <IoMoon size="14px" />)}

                  <span style={{ marginLeft: '0.70rem' }}> {theme} Theme</span>
               </ModeSwitcher>
            </Wrapper>
         </Container>
      </HeaderEl>
   );
};
