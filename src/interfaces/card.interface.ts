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

export interface InteriorCategory {
    interiorCategoryId?: number;
    categoryId?: number;
    subCategoryId?: number;
    name?: any;
    displayStatus?: number;
    icon?: any;
    categoryLandPageDesc?: string | null;
    categoryLandPageHead?: string | null;
    subCategoryLandPageDesc?: string | null;
    isActive?: boolean;
    seotitle?: string | null;
    seoprettyUrl?: string | null;
    seodescMetadata?: string | null;
    createdDate?: string;
    updatedDate?: string;
    deleteFlag?: boolean;
    rowVersion?: string;
}

export interface CardInteriorCategoryProps {
    interiorCategories?: Array<InteriorCategory>
}