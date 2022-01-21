import styled from "styled-components";
import { IoSearch } from 'react-icons/io5'

const InputContainer = styled.label`
   background-color: var(--colors-ui-base);
   padding: 1rem 2rem;
   display: flex;
   align-items: center;

   border-radius: var(--bradius);
   box-shadow: var(--shadow);
   width: 100%;
   margin-bottom: 1.5rem;

   @media(min-width: 767px) {
      margin-bottom: 0;
      width: 280px;
   }
`;

const Input = styled.input.attrs({
   types: 'search',
   placeholder: 'Search for a country...'
})`
   margin-left: 1.5rem;
   border: none;
   outline: none;
   color: var(--color-text);
`;




export const Search = ({ search, setSearch }) => {
   return (
      <InputContainer>
         <IoSearch />
         <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      </InputContainer>
   );
};