import React, { useState, useEffect } from 'react';
import './card.css';
import { PropsCard } from '../../interfaces/card.interface';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import { Chip, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardComponent(props: PropsCard) {
  const {name, image, origin, location, status, species, gender, id, expandedCard, width} = props;
  const [expanded, setExpanded] = useState<any>(false);
  const navigate = useNavigate()

  const handleExpandClick = () => {
    setExpanded(!expanded || expandedCard);
  };
  useEffect(() => {}, [])

  const navigateToCharacter = () => {
    navigate(`/character/${id}`)
  }

  return (
      <Card sx={{ width: width || 300 }}  className={`class-card border border-shadow-${status.toLowerCase()}`}>
        <CardHeader
          title={
            <div>
              <div>{name}</div>
              <Chip
                label={status}
                color={
                  status.toLowerCase() === 'alive' ? 'success' :
                  status.toLowerCase() === 'dead' ? 'error' : 'info'
                }
                variant="outlined" />
            </div>}
          subheader={`${species} - ${gender}`}
        />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <CardMedia
              component="img"
              className={`${status.toLowerCase()}`}
              image={image}
              alt={name}
              onClick={() => navigateToCharacter()}
            />
          </Grid>
        </Grid>
        
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded || expandedCard}
            onClick={handleExpandClick}
            aria-expanded={expanded || expandedCard}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded || expandedCard} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography paragraph>Identificador: {id}</Typography>
            <Typography paragraph>Origin: <a href={origin.url}>{origin.name} </a></Typography>
            <Typography paragraph>Location: <a href={location.url}>{location.name} </a></Typography>      
          </CardContent>
        </Collapse>
      </Card>
  );
}

export default CardComponent;
// cambiar a mayusculas el nombre de los componentes(solo la primer letra)