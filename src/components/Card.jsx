import styled from "styled-components";

const Wrapper = styled.article`
  border-radius: var(--bradius);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CartListItem = styled.li``;

export const Card = ({img, name, info = [], onClick}) => {
  return (
     <Wrapper onClick={onClick}>
       <CardImage src={img}/>
       <CardBody>
         <CardTitle>{name}</CardTitle>
         <CardList>
           {info.map(el => (
             <CartListItem key={el.title}>
               <b>{el.title}:</b> {el.description}
             </CartListItem>
           ))}
         </CardList>
       </CardBody>
     </Wrapper>
  );
};
