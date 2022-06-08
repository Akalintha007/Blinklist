import { createTheme} from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

declare module '@mui/material/styles' {
    interface TypographyVariants {

        ESubtitle3: React.CSSProperties;
        finishedHead: React.CSSProperties;
        cardBody1: React.CSSProperties;
        cardHeading: React.CSSProperties;
        heading: React.CSSProperties;
        heading3: React.CSSProperties;
        subtitle3: React.CSSProperties;
        body3: React.CSSProperties;
        caption1: React.CSSProperties;
        caption2: React.CSSProperties;
        caption3: React.CSSProperties;
        bannerHeading1: React.CSSProperties;
        bannerSubtitle2:React.CSSProperties;
    }
  
    interface TypographyVariantsOptions {

        ESubtitle3?: React.CSSProperties;
        finishedHead?: React.CSSProperties;
        cardBody1?: React.CSSProperties;
        cardHeading?: React.CSSProperties;
        heading?: React.CSSProperties;
        heading3?: React.CSSProperties;
        subtitle3?: React.CSSProperties;
        body3?: React.CSSProperties;
        caption1?: React.CSSProperties;
        caption2?: React.CSSProperties;
        caption3?: React.CSSProperties;
        bannerHeading1?: React.CSSProperties;
        bannerSubtitle2?:React.CSSProperties;
    }

    interface PaletteColor {
        darker?: string;
        border?: string;
        placeholder?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
        placeholder?: string;
        border?: string;
    }

    interface Palette {
        greyscale: Palette['primary'];
        textcolor: Palette['primary'];
        backgroundcolor: Palette['primary'];
    }

    interface PaletteOptions {
        greyscale?: PaletteOptions['primary'];
        textcolor?: PaletteOptions['primary'];
        backgroundcolor?: PaletteOptions['primary'];
    }
    
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        cardBody1: true;
        cardHeading:  true;
        heading:  true;
        heading3:  true;
        subtitle3: true;
        body3: true; 
        caption1:  true;
        caption2: true;
        caption3:  true;
        bannerHeading1: true;
        bannerSubtitle2: true;
    }
}
  


let mainTheme = createTheme({
    palette: {
        primary: {
            light: '#F1F6F4',
            main: '#2CE080',
            dark: '#22C870',
            darker: '#20BA68',
        },
        secondary: {
            light: '#DFE8F6',
            main: '#0365F2',
            dark:'#E1ECFC',
            darker:'#0365F2'
        
        },
        greyscale: {
            light: '#BAC9CF',
            dark: '#3A4649',
            main: '#6C787F',
            darker: '#042330',
        },
        textcolor: {
            light: '#6D787E',
            main: '#03314B',
            placeholder:'#747575',
            dark: '#042330',
        },
        backgroundcolor: {
            light: '#F7F7F7',
            main: '#F1F6F4'
        },
       
    },
    typography: {
        fontFamily: "Roboto",
        heading: {
            fontFamily: "Roboto",
            fontSize: '36px',
            lineHeight: '45px',
            fontWeight: 700,
        },
        subtitle1: {
            fontFamily: "Roboto",
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 500,
        },
        cardHeading: {
            fontFamily: "Roboto",
            fontSize: '18px',
            lineHeight: '23px',
            fontWeight: 700,
        },
        subtitle2: {
            fontFamily: "Roboto",
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 700,
        },
        bannerSubtitle2: {
            fontFamily: "Roboto",
            fontSize: '18px',
            lineHeight: '22px',
            fontWeight: 400,
        },
        subtitle3: {
            fontFamily: "Roboto",
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 400,
        },
        ESubtitle3: {
            fontFamily: "Roboto",
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 700,
        },
        body1: {
            fontFamily: "Roboto",
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 700,
        },
        cardBody1: {
            fontFamily: "Roboto",
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 500,
        },
        body2: {
            fontFamily: "Roboto",
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400,
        },
        body3: {
            fontFamily: "Roboto",
            fontSize: '22px',
            lineHeight: '26px',
            fontWeight: 400,
        },
        finishedHead: {
            fontFamily: "Roboto",
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 500,
        },
        heading3: {
            fontFamily: "Roboto",
            fontSize: '24px',
            lineHeight: '30px',
            fontWeight: 700,
        },
        caption1: {
            fontFamily: "Roboto",
            fontSize: '14px',
            lineHeight: '22px',
            fontWeight: 400,
        },
        caption2: {
            fontFamily: "Roboto",
            fontSize: '10px',
            lineHeight: '22px',
            fontWeight:700
        },
        caption3: {
            fontFamily: "Roboto",
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight:400
        },
        bannerHeading1:
        {
            fontFamily: "Roboto",
            fontSize: '36px',
            lineHeight: '42px',
            fontWeight: 400,
        },
    },
    spacing: [4, 8, 12, 16, 20, 32, 48]
});


export default mainTheme;