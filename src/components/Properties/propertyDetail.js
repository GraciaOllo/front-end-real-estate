import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropertyMap from './PropertyMap';
import VisualTour from '../Visualizations/VisualTour';
import { Container, Typography, Box, Button } from '@mui/material';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`/api/properties/${id}`)
      .then(response => setProperty(response.data))
      .catch(error => console.error("Error fetching property details!", error));
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <Container>
      <Typography variant="h3">{property.title}</Typography>
      <Typography variant="h5">{property.price}</Typography>
      <Box>
        <VisualTour modelUrl={property.matterportUrl} />
      </Box>
      <Box>
        <PropertyMap properties={[property]} />
      </Box>
      <Button variant="contained" color="primary" href={`/book/${property.id}`}>
        Book This Property
      </Button>
    </Container>
  );
};

export default PropertyDetail;
