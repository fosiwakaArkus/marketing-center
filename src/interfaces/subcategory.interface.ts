interface Subcategory {
  subCategoryId: number;
  categoryId: number;
  name: string;
  description: string | null;
  displayStatus: number;
  ftinHeaderAndFooter: boolean;
  ftinBannerIcon: boolean;
  ftinTitle: boolean;
  icon: string;
  useExternalUrl: boolean;
  categoryLandPageDesc: string | null;
  categoryLandPageHead: string | null;
  subCategoryLandPageDesc: string | null;
  isActive: boolean;
  static: boolean;
  seotitle: string | null;
  seoprettyUrl: string | null;
  seodescMetadata: string | null;
  createdDate: string;
  updatedDate: string;
  deleteFlag: boolean;
  rowVersion: string;
  subCategoryThumbNails: any[];
}

export interface Response {
  success: boolean;
  data: {
    subCategories: Subcategory[];
  };
  error: {
    innerException: string;
    message: string;
  };
}