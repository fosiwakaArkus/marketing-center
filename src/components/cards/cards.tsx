
import React, { useEffect, useState } from 'react';
import './cards.css';
import Grid from '@mui/material/Grid';
import CardComponent from '../cardComponent/card';
import { CardSubCategoryProps, SubCategories } from '../../interfaces/card.interface';
import { subCategoriesFake } from './fixtures';
import axios from 'axios';

function Cards() {
    const [subCatState, setSubCatState] = useState<Array<SubCategories> | undefined>(subCategoriesFake)


    useEffect(() => {
        axios.get(`${process.env.DATABASE_URL}/api/v1/SubCategory/GetAll`).then((response: {data: CardSubCategoryProps}) => {
            setSubCatState(response.data.subCategories || subCategoriesFake)
        }).catch(() => setSubCatState(subCategoriesFake))
    
    }, [])

    return (
        <div className='cards'>
            <div className='cards__container'>
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center">
                            <Grid
                                container
                                direction="row"
                                alignItems="center"

                                justifyContent="space-evenly"
                                spacing={2}
                                item
                            >
                                {subCatState && subCatState.map((item: SubCategories) => (
                                      <Grid item xs={12} md={4} key={item.categoryId + item.description}>
                                        <div className='card-component'>
                                            <CardComponent
                                                src={item.icon}
                                                text={item.description}
                                                label={item.name}
                                                path={`/category/${item.subCategoryId}`}
                                            />
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
}

export default Cards;