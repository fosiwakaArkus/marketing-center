
import React, { useEffect, useState } from 'react';
import './category.css';
import Grid from '@mui/material/Grid';
import { CardInteriorCategoryProps, InteriorCategory } from '../../interfaces/card.interface';
import { InteriorCategoryFake } from './fixtures';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CategoryCardsComponent from '../categoryCard/categoryCard';

function CategoryCards() {
    const propsURL = useParams();
    const [intCatState, setIntCatState] = useState<Array<InteriorCategory> | undefined>(InteriorCategoryFake)


    useEffect(() => {
        axios.get(`${process.env.DATABASE_URL}/api/v1/interiorcategory/GetDataBySubCategoryId/${propsURL.id}`).then((response: { data: CardInteriorCategoryProps }) => {
            setIntCatState(response.data.interiorCategories || InteriorCategoryFake)
        }).catch(() => setIntCatState(InteriorCategoryFake))

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
                                {intCatState && intCatState.map((item: InteriorCategory) => (
                                      <Grid item xs={12} md={4} key={item.categoryId}>
                                        <div className='card-component'>
                                            <CategoryCardsComponent
                                                src={item.icon}
                                                label={item.name}
                                                text='Provide a memorable takeaway with our collection of professionally-designed flyers.'
                                                path={`/list/${item.subCategoryId}`}
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

export default CategoryCards;