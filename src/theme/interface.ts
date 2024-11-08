import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    general: {
      primary: string;
      secondary: string;
      text: string;
      white: string;
      error: string;
      orange: string;
      success: string;
      active: string;
    };
  }

  interface PaletteOptions {
    general: {
      primary: string;
      secondary: string;
      text: string;
      white: string;
      error: string;
      orange: string;
      success: string;
      active: string;
    };
  }

  interface TypographyVariants {
    Text: React.CSSProperties;
    FunctionText1: React.CSSProperties;
    Message: React.CSSProperties;
    HeadPageText: React.CSSProperties;
    FunctionText2: React.CSSProperties;

    CardTitle: React.CSSProperties;
    CardServise: React.CSSProperties;
    CommentText: React.CSSProperties;
    InputText: React.CSSProperties;
    H1Car: React.CSSProperties;
    H2Car: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    Text?: React.CSSProperties;
    FunctionText1?: React.CSSProperties;
    Message?: React.CSSProperties;
    HeadPageText?: React.CSSProperties;
    FunctionText2?: React.CSSProperties;

    CardTitle?: React.CSSProperties;
    CardServise?: React.CSSProperties;
    CommentText?: React.CSSProperties;
    InputText?: React.CSSProperties;
    H1Car?: React.CSSProperties;
    H2Car?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    Text: true;
    FunctionText1: true;
    Message: true;
    HeadPageText: true;
    FunctionText2: true;

    CardTitle: true;
    CardServise: true;
    CommentText: true;
    InputText: true;
    H1Car: true;
    H2Car: true;
  }
}
