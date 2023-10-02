export interface PropsCard {
    expandedCard?: boolean;
    width?: any;
}

export interface CardSubCategoryProps {
    subCategories?: Array<SubCategories>
}

export interface SubCategories {
    subCategoryId?: any;
    categoryId?: any;
    name?: any;
    description?:  any;
    displayStatus?: any;
    BtinHeaderAndFooter?: any;
    ftinBannerIcon?: any;
    ftinTitle?: any;
    icon?:  any;
    useExternalUrl?: any;
    categoryLandPageDesc?:  any;
    categoryLandPageHead?:  any;
    subCategoryLandPageDesc?:  any;
    isActive?: any;
    static?: any;
    seotitle?: any;
    seoprettyUrl?:  any;
    seodescMetadata?:  any;
    createdDate?:  any;
    updatedDate?:  any;
    deleteFlag?: any;
    rowVersion?:  any;
    subCategoryThumbNails?: Array<any>;
    ftinHeaderAndFooter?: any;
}