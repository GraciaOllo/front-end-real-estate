import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function PropertyCard({ property }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={property.imageUrl}
        alt={property.title}
      />
      <CardContent>
        <Typography variant="h5">{property.title}</Typography>
        <Typography variant="subtitle1">{property.price}</Typography>
        <Link to={`/properties/${property.id}`}>View Details</Link>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
