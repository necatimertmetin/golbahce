import type { ButtonProps } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// MUI palette genişletme
declare module "@mui/material/styles" {
  interface Palette {
    customBackground: {
      box: string;
    };
    highlightedRow: {
      main: string;
    };
  }

  interface PaletteOptions {
    customBackground?: {
      box: string;
    };
    highlightedRow?: {
      main: string;
    };
  }
}

// Light Theme (Göl/Deniz temalı açık tema)
const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1E88E5", // Su mavisi (deniz)
      light: "#6AB7FF", // Açık mavi
      dark: "#005CB2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#81C784", // Doğal yeşil (bitkiler)
    },
    background: {
      default: "#F0F9FF", // Açık deniz arka planı
      paper: "#ffffff", // Kart vs.
    },
    text: {
      primary: "#1B2A41", // Lacivertimsi koyu mavi
      secondary: "#4B6274", // Yardımcı yazılar
    },
    customBackground: {
      box: "#e3f2fd", // Açık mavi kutular
    },
    highlightedRow: {
      main: "#d1ecf1", // Hafif vurgulu satır
    },
  },
  typography: {
    fontFamily: ` "Montserrat", sans-serif`,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: ` "Montserrat", sans-serif`,
      },
      styleOverrides: {
        root: {
          color: "#1B2A41",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "default",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          height: "64px",
          color: "#1B2A41",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F0F9FF",
          color: "#1B2A41",
        },
        "main.MuiBox-root": {
          backgroundColor: "#e3f2fd",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              color: "#fff",
            }),
        }),
      },
    },
  },
});

// Dark Theme (Deniz gecesi temalı koyu tema)
const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0288D1", // Okyanus mavi
      light: "#4FC3F7",
      dark: "#01579B",
    },
    secondary: {
      main: "#66BB6A", // Hafif yeşilimsi
    },
    background: {
      default: "#0B1A24", // Derin gece mavisi
      paper: "#102A3C", // Kartlar
    },
    customBackground: {
      box: "#1B3A4B",
    },
    highlightedRow: {
      main: "#25495D",
    },
  },
  typography: {
    fontFamily: ` "Montserrat", sans-serif`,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "default",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#102A3C",
          height: "64px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              color: "#fff",
            }),
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0B1A24",
          color: "#ffffff",
        },
        "main.MuiBox-root": {
          backgroundColor: "#1B3A4B",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: ` "Montserrat", sans-serif`,
      },
    },
  },
});

// Responsive hale getir
const DarkThemeWithResponsiveFontSizes = responsiveFontSizes(DarkTheme);
const LightThemeWithResponsiveFontSizes = responsiveFontSizes(LightTheme);

// Export et
export { LightThemeWithResponsiveFontSizes, DarkThemeWithResponsiveFontSizes };
