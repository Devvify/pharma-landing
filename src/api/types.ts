export type LandingCategory = {
  CategoryId: string;
  Category: string;
  CategoryPhotos?: string | null;
  QuizCategoryName?: string | null;
  QuizCategoryImage?: string | null;
};

export type LandingProduct = {
  ProductId: number;
  IsPrescriptionGenerationRequired: boolean;
  IsAcknowledgmentRequired: boolean;
  Name: string;
  Price: number;
  LowestPrice?: number | null;
  ConsultancyFee?: number | null;
  MedicineType?: string | null;
  CoverPhoto?: string | null;
  PreviewUrl?: string | null;
  IntakeFormScreenUrl?: string | null;
  CategoryId: number;
  Category: string;
  ShippingCharge?: number | null;
  LabCharge?: number | null;
  IsCompounded: boolean;
  IsPerMonth: boolean;
  IsStartWithLowest: boolean;
  IsOutOfStock: boolean;
  ContentAlignment?: string | null;
  TotalDoes?: number | null;
  Doses?: string | null;
  AboutTheProduct?: string | null;
  HealthBenefits?: string | null;
};

export type LandingProductsGroup = {
  CategoryId: number;
  Category: string;
  Products: LandingProduct[];
};
