import axios from 'axios';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Info } from '../components/Info';

import { searchByCountry } from '../config';

export const Details = () => {
  const { name } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
      axios.get(searchByCountry(name)).then(
        ({data}) => setCountry(data[0])
      )
  }, [name]);


  const navigate = useNavigate();
  const goToCountry = (name) => {
    navigate(`/country/${name}`);
  }
  
  const goBack = () => {
    navigate(-1);
  }

  return <div>
    <Button onClick={goBack}>
      <IoArrowBack/> Back
    </Button>

    {country && (<Info {...country} param={name} goToCountry={goToCountry}/>)}
    
  </div>;
};
