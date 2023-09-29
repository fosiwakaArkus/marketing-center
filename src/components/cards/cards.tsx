import React, { useEffect, useState } from 'react';
import './cards.css';
import Grid from '@mui/material/Grid';
import CardComponent from '../cardComponent/card';
import axios from 'axios';
import { Response } from '../../interfaces/subcategory.interface';
import { useParams } from "react-router-dom";


function Cards() {
    /* const subcategory = {
        "success": true,
        "data": {
            "subCategories": [
                {
                    "subCategoryId": 1,
                    "categoryId": 2,
                    "name": "Flyers",
                    "description": "Provide a memorable takeaway with our collection of professionally-designed flyers.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Flyer_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:17:58.6366667",
                    "updatedDate": "2023-09-26T16:17:58.6366667",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACBo=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 2,
                    "categoryId": 2,
                    "name": "PostCards",
                    "description": "Explore a variety of postcards designed for every occasion.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Postcard_650x650_1.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:19:32.01",
                    "updatedDate": "2023-09-26T16:19:32.01",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACBs=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 3,
                    "categoryId": 2,
                    "name": "Brochures",
                    "description": "Advertise your listing with our luxury 8-page booklets and classic brochures.\r\n",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Brochure_650x650_1.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:20:30.9133333",
                    "updatedDate": "2023-09-26T16:20:30.9133333",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACBw=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 4,
                    "categoryId": 2,
                    "name": "Social Media",
                    "description": "Engage with your audience by using our ready-to-share social media items.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Social_Media_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:21:19.9233333",
                    "updatedDate": "2023-09-26T16:21:19.9233333",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACB0=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 5,
                    "categoryId": 2,
                    "name": "FaceBook Ads",
                    "description": "﻿﻿Walled Garden integration\r\nto automate and easily\r\nlaunch Faceboo﻿﻿k ads.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_thumb-ref3.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:22:35.91",
                    "updatedDate": "2023-09-26T16:22:35.91",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACB4=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 6,
                    "categoryId": 2,
                    "name": "Single Property Sites",
                    "description": "Level up your marketing using single property sites.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Laptop_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:23:33.13",
                    "updatedDate": "2023-09-26T16:23:33.13",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACB8=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 7,
                    "categoryId": 2,
                    "name": "Door Hangers",
                    "description": "Attract attention to your listings, open house, or yourself with a customizable door hanger.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Doorhanger_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:24:41.48",
                    "updatedDate": "2023-09-26T16:24:41.48",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACCA=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 8,
                    "categoryId": 2,
                    "name": "Presentations",
                    "description": "Make an impression on your clients with our elegant presentations.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Presentation_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:25:19.64",
                    "updatedDate": "2023-09-26T16:25:19.64",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACCE=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 9,
                    "categoryId": 2,
                    "name": "Videos",
                    "description": "Educate your sphere about the real estate industry with our informative videos.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Video_Mockup_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:26:17.0266667",
                    "updatedDate": "2023-09-26T16:26:17.0266667",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACCI=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 10,
                    "categoryId": 2,
                    "name": "Letter/LetterHeads",
                    "description": "Connect with past and future clients with pre-written letters and customizable letterheads.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Letter_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:26:58.02",
                    "updatedDate": "2023-09-26T16:26:58.02",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACCM=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 11,
                    "categoryId": 2,
                    "name": "Helpful Documents",
                    "description": "Cover your bases with the help of these branded documents.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Helpful_Docs_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:27:38.5833333",
                    "updatedDate": "2023-09-26T16:27:38.5833333",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACCQ=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 12,
                    "categoryId": 2,
                    "name": "Business Cards",
                    "description": "Create a first and lasting impression by using one of a variety of branded business cards.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Business_Card_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:28:15.23",
                    "updatedDate": "2023-09-26T16:28:15.23",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACCU=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 13,
                    "categoryId": 2,
                    "name": "Email Signatures",
                    "description": "Keep your communications branded with the information your contacts need.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Email_Signature_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:29:33.31",
                    "updatedDate": "2023-09-26T16:29:33.31",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACCY=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 14,
                    "categoryId": 2,
                    "name": "NewsLetters",
                    "description": "Keep your sphere informed and updated with industry insights and other helpful topics.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Newsletter_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:30:11.5966667",
                    "updatedDate": "2023-09-26T16:30:11.5966667",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACCc=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 15,
                    "categoryId": 2,
                    "name": "Spanish Materials",
                    "description": "Appeal to Spanish-speaking audiences with our variety of Spanish marketing items.",
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_crop_Spanish_Marketing_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:30:49.7066667",
                    "updatedDate": "2023-09-26T16:30:49.7066667",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACCg=",
                    "subCategoryThumbNails": []
                },
                {
                    "subCategoryId": 16,
                    "categoryId": 2,
                    "name": "eXp Soluutions",
                    "description": null,
                    "displayStatus": 0,
                    "ftinHeaderAndFooter": false,
                    "ftinBannerIcon": false,
                    "ftinTitle": false,
                    "icon": "https://gmbb20.s3.amazonaws.com/home/crop_eXp_Solutions_650x650.png",
                    "useExternalUrl": false,
                    "categoryLandPageDesc": null,
                    "categoryLandPageHead": null,
                    "subCategoryLandPageDesc": null,
                    "isActive": false,
                    "static": false,
                    "seotitle": null,
                    "seoprettyUrl": null,
                    "seodescMetadata": null,
                    "createdDate": "2023-09-26T16:31:48.4633333",
                    "updatedDate": "2023-09-26T16:31:48.4633333",
                    "deleteFlag": false,
                    "rowVersion": "AAAAAAAACBk=",
                    "subCategoryThumbNails": []
                }
            ]
        },
        "error": {
            "innerException": "",
            "message": ""
        }
    } */
        const [subcategory, setSubcategory] = useState<Response>({} as Response)
        let params = useParams();
    
        useEffect(() => {
            getSubcategory()
        }, [])
    
        function getSubcategory(): void {
            console.log('params: ', params)
            axios.get(`https://localhost:7069/subcategory/getall`)
                .then((response: any) => setSubcategory({ ...response.data}))
                .catch((error) => console.error('ocurro un error: ', error))
        }

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
                               {/*  {subcategory.data?((item: any) => {
                                    return (
                                        <Grid item xs={12} md={4} >
                                            <div className='ejem'>
                                                <CardComponent
                                                    src={item.icon}
                                                    text={item.description}
                                                    label={item.name}
                                                    path='/services'
                                                />
                                            </div>
                                        </Grid>
                                    )
                                }
                                ):null} */}
                                

                                <Grid item xs={12} md={4} >
                                    <div className='ejem'>
                                        <CardComponent
                                            src='/images/img-7.jpg'
                                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                                            label='Mystery'
                                            path='/services'
                                        />
                                    </div>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <button className='btn' onClick={() => console.log(subcategory)}>Ver más</button>
            </div>
        </div>

    );
}

export default Cards;