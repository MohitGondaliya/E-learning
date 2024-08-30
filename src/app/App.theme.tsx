import { createTheme } from "@mui/material/styles";
import images from "./assets/images";

let LearningTheme = createTheme({
  palette: {
    primary: {
      main: "#4B0082",
      dark: "#3C0068",
      light: "#6F339B",
    },
    secondary: {
      main: "#FFD700",
      dark: "#094849",
    },
    text: {
      primary: "#001D2D",
      secondary: "#6D7F89",
      disabled: "#B1B8BD",
    },
    error: {
      main: "#E45839",
    },
    warning: {
      main: "#E4A039",
    },
    info: {
      main: "#39A6E4",
      dark: "",
      light: "#CDD6DB",
      contrastText: "#B3C3CC",
    },
    success: {
      main: "#309985",
    },

  },
});

LearningTheme = createTheme(LearningTheme, {
  typography: {
    fontFamily: '"Nunito", sans-serif',
    h1: {
      fontSize: "104px",
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: 0,
      [LearningTheme.breakpoints.down("lg")]: {
        fontSize: "64px",
      },
      [LearningTheme.breakpoints.down("md")]: {
        fontSize: "48px",
      },
      [LearningTheme.breakpoints.down("sm")]: {
        fontSize: "32px",
      },
    },
    h2: {
      fontSize: "64px",
      lineHeight: 1.58334,
      fontWeight: 700,
      [LearningTheme.breakpoints.down("lg")]: {
        fontSize: "48px",
      },
      [LearningTheme.breakpoints.down("md")]: {
        fontSize: "32px",
      },
      [LearningTheme.breakpoints.down("sm")]: {
        fontSize: "24px",
      },
    },
    h3: {
      fontSize: "48px",
      lineHeight: 1.25,
      fontWeight: 700,
      letterSpacing: 0,
      [LearningTheme.breakpoints.down("lg")]: {
        fontSize: "32px",
      },
      [LearningTheme.breakpoints.down("md")]: {
        fontSize: "24px",
      },
      [LearningTheme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
    },
    h4: {
      fontSize: "32px",
      lineHeight: 1.3125,
      fontWeight: 700,
      letterSpacing: 0,
      [LearningTheme.breakpoints.down("lg")]: {
        fontSize: "24px",
      },
      [LearningTheme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
    },
    h5: {
      fontSize: "24px",
      lineHeight: 1.33334,
      fontWeight: 700,
      letterSpacing: 0,
      [LearningTheme.breakpoints.down("md")]: { fontSize: "20px" },
    },
    h6: {
      fontSize: "20px",
      lineHeight: 1.3,
      fontWeight: 700,
      letterSpacing: 0,
      [LearningTheme.breakpoints.down("md")]: {
        fontSize: "18px",
      },
    },
    body1: {
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: 400,
      letterSpacing: "0.15px",
    },
    body2: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      letterSpacing: "0.1px",
    },
    subtitle1: {
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: 400,
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 700,
      letterSpacing: "0.1px",
    },
    caption: {
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: 400,
      letterSpacing: "0.4px",
    },
    overline: {
      fontSize: "10px",
      lineHeight: "16px",
      fontWeight: 400,
      letterSpacing: "0.6px",
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          [LearningTheme.breakpoints.up("sm")]: {
            paddingLeft: 12,
            paddingRight: 12,
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          left: 0,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Nunito", sans-serif',
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          '&.MuiDatepicker': {
            '& .MuiOutlinedInput-root': {
              '& .MuiOutlinedInput-input': {
                paddingRight: 0,
              },
              '& .MuiInputAdornment-root': {
                '& .MuiIconButton-root': {
                  '& .MuiSvgIcon-root': {
                    '& path': {
                      display: 'none',
                    },
                    right: 20,
                    width: 24,
                    height: 24,
                    backgroundImage: `url(${images.DatepickerGrey})`,
                    backgroundPosition: 'center center',
                    backgroundSize: '24px 24px',
                    backgroundRepeat: "no-repeat",
                  },
                },
              },
            },
          },
          '&.MuiTimepicker': {
            '& .MuiOutlinedInput-root': {
              '& .MuiInputAdornment-root': {
                '& .MuiIconButton-root': {
                  '& .MuiSvgIcon-root': {
                    '& path': {
                      display: 'none',
                    },
                    right: 20,
                    width: 24,
                    height: 24,
                    backgroundImage: `url(${images.TimepickerGrey})`,
                    backgroundPosition: 'center center',
                    backgroundSize: '24px 24px',
                    backgroundRepeat: "no-repeat",
                  },
                },
              },
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 33,
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1,
            },
          },
          '&.centered-text': {
            '& .MuiInputBase-input': {
              textAlign: 'center',
              padding: '16.5px 24px',
              [LearningTheme.breakpoints.down('sm')]: {
                padding: '12.5px 24px',
              },
            }
          },
        },
        input: {
          padding: '12.5px 24px',
          fontFamily: '"Nunito", sans-serif',
          fontSize: 16,
          fontWeight: 400,
          lineHeight: '22px',
          letterSpacing: '0.15px',
          color: [LearningTheme.palette.text.primary],
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          maxWidth: '100%',
          display: 'block',
          '&::placeholder': {
            color: [LearningTheme.palette.text.secondary],
            opacity: 1,
            fontFamily: '"Nunito", sans-serif',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '22px',
            letterSpacing: '0.15px',
          }
        },
        notchedOutline: {
          borderColor: '#CDD6DB',
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        adornedStart: {
          '&.MuiOutlinedInput-root': {
            paddingLeft: 20,
          }
        },
        adornedEnd: {
          '&.MuiOutlinedInput-root': {
            paddingRight: 20,
          }
        },
      },
    },

    MuiInputAdornment: {
      styleOverrides: {
        positionStart: {
          marginLeft: 0,
          marginRight: -12,
        },
        positionEnd: {
          maginLeft: -12,
          marginRight: 0,
        },
        root: {
          '& .controled-select': {
            marginRight: -8,
            borderRadius: '0 33px 33px 0',
            backgroundColor: '#F1F4F6',
            minWidth: 110,
            maxWidth: 110,
            '&.Mui-focused': {
              zIndex: 1,
            },
            '& .MuiSelect-select': {
              paddingLeft: 16,
              paddingRight: 43,
              minHeight: 21,
            },
            '& .MuiSelect-icon': {
              right: 10,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: 0,
            },
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
        sizeSmall: {
          padding: 5,
        },
        sizeMedium: {
          padding: 8,
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 24,
          height: 24,
        },
        rounded: {
          borderRadius: '50%',
        }
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: {
          '&.MuiOutlinedInput-input': {
            paddingRight: 48,
          }
        },
        icon: {
          right: 20,
          width: 24,
          height: 24,
          backgroundImage: `url(${images.SelectArrowGrey})`,
          backgroundPosition: 'center center',
          backgroundSize: '24px 24px',
          backgroundRepeat: "no-repeat",
          transition: 'all 150ms ease-in-out',
          '& path': {
            display: 'none',
          }
        },
        iconOpen: {
          translate: 'rotate(180deg)',
        },
        // select: {
        //   minHeight: 23,
        // },
      },
    },

    MuiPickersPopper: {
      styleOverrides: {
        root: {
          '& .MuiPickersPopper-paper': {
            borderRadius: 16,
            boxShadow: '0px 13px 27px -5px #32325D40, 0px 8px 16px -8px #0000004D',
            '& .MuiPickersLayout-root': {
              '& .MuiDateCalendar-root': {
                '& .MuiPickersCalendarHeader-root': {
                  '& .MuiPickersCalendarHeader-labelContainer': {
                    fontFamily: '"Nunito", sans-serif',
                    color: [LearningTheme.palette.text.primary],
                  },
                  '& .MuiPickersArrowSwitcher-root': {
                    '& .MuiPickersArrowSwitcher-button': {
                      fontSize: '1.5em',
                      color: '#B1B8BD',
                    },
                  },
                },
                '& .MuiDateCalendar-viewTransitionContainer': {
                  '& .MuiDayCalendar-root': {
                    '& .MuiDayCalendar-header ': {
                      '& .MuiDayCalendar-weekDayLabel': {
                        fontSize: 14,
                        height: 44,
                        fontFamily: '"Nunito", sans-serif',
                        color: '#B1B8BD',
                      },
                    },
                    '& .MuiDayCalendar-slideTransition': {
                      '& .MuiDayCalendar-weekContainer': {
                        '& .MuiPickersDay-root': {
                          fontFamily: '"Nunito", sans-serif',
                          fontSize: 13,
                          '&:hover': {
                            color: [LearningTheme.palette.primary.main],
                            backgroundColor: 'rgba(75,0,130,0.1)',
                          },
                        },
                      },
                    },
                  },
                  '& .MuiMonthCalendar-root': {
                    '& .MuiPickersMonth-root': {
                      '& .MuiPickersMonth-monthButton': {
                        fontFamily: '"Nunito", sans-serif',
                        fontSize: 14,
                        '&:hover': {
                          color: [LearningTheme.palette.primary.main],
                          backgroundColor: 'rgba(75,0,130,0.1)',
                        },
                      },
                    },
                  },
                  '& .MuiYearCalendar-root': {
                    '& .MuiPickersYear-root': {
                      '& .MuiPickersYear-yearButton': {
                        fontFamily: '"Nunito", sans-serif',
                        fontSize: 14,
                        '&:hover': {
                          color: [LearningTheme.palette.primary.main],
                          backgroundColor: 'rgba(75,0,130,0.1)',
                        },
                      }
                    },
                  },
                },
              },
              '& .MuiPickersLayout-contentWrapper': {
                '& .MuiMultiSectionDigitalClock-root': {
                  '& .MuiMultiSectionDigitalClockSection-root': {
                    '& .MuiMultiSectionDigitalClockSection-item': {
                      fontFamily: '"Nunito", sans-serif',
                      fontSize: 16,
                      lineHeight: '20px',
                      marginTop: 0,
                      margin: 4,
                      borderRadius: 6,
                      '&:hover': {
                        color: [LearningTheme.palette.primary.main],
                        backgroundColor: 'rgba(75,0,130,0.1)',
                      },
                    },
                  },
                },
              },
              '& .MuiPickersLayout-actionBar': {
                '& .MuiButtonBase-root': {
                  fontFamily: '"Nunito", sans-serif',
                  fontSize: 16,
                  borderRadius: 32,
                  textTransform: 'none',
                },
              },
            },
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 10,
          margin: '-10px 0',
          borderRadius: '50%',
          color: '#BEBEBE',
          '& + .MuiFormControlLabel-label': {
            fontFamily: '"Nunito", sans-serif',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '22px',
            letterSpacing: '0.15px',
          }
        },
        sizeMedium: {
          width: 44,
          height: 44,
          '& .MuiSvgIcon-root': {
            width: 24,
            height: 24,
            borderRadius: 6,
            border: '2px solid #CDD6DB',
            backgroundSize: "24px 24px",
          },
          '&.Mui-checked': {
            '& .MuiSvgIcon-root': {
              backgroundSize: "20px 20px",
            },
          }
        },

        colorPrimary: {
          '& .MuiSvgIcon-root': {
            '& path': {
              display: 'none',
            },
          },
          '&.Mui-checked': {
            '& .MuiSvgIcon-root[data-testid="CheckBoxIcon"]': {
              backgroundColor: [LearningTheme.palette.primary.main],
              borderColor: [LearningTheme.palette.primary.main],
              backgroundImage: `url(${images.CheckboxWhite})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            },
          }
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {},
        track: {
          backgroundColor: [LearningTheme.palette.info.contrastText],
          opacity: 0.56,
          borderRadius: 16,
        },
        switchBase: {
          '&.Mui-checked': {
            '& + .MuiSwitch-track': {
              opacity: 1,
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: '#FFFFFF',
            },
          },
          '& .MuiSwitch-thumb': {
            boxShadow: '0px 1px 2px 0px #4242421F, 0px 1px 2px 0px #4242423D',
          },
        },
        sizeSmall: {
          padding: 5,
          width: 42,
          height: 28,
          '& .MuiSwitch-switchBase': {
            padding: 7,
            '&.Mui-checked': {
              transform: 'translateX(14px)',
            },
            '& .MuiSwitch-thumb': {
              width: 14,
              height: 14,
            },
          },
        },
        sizeMedium: {
          padding: 5,
          width: 52,
          height: 34,
          '& .MuiSwitch-switchBase': {
            padding: 8,
            '&.Mui-checked': {
              transform: 'translateX(18px)',
            },
            '& .MuiSwitch-thumb': {
              width: 18,
              height: 18,
            },
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 'auto',
          border: 0,
        },
        indicator: {
          height: 2,
        },
        vertical: {
          minWidth: 200,
          '& .MuiTabs-scroller': {
            '& .MuiTabs-flexContainer': {
              '& .MuiTab-root': {
                backgroundColor: '#F1F4F6',
                minHeight: 59,
                '&.Mui-selected': {
                  backgroundColor: '#FFFFFF',
                }
              },
            },
            '& .MuiTabs-indicator': {
              width: 4,
              left: 0,
              right: 'auto',
              borderRadius: '0 6px 6px 0'
            },
          },
        },
        flexContainer: {
          marginBottom: 0,
          borderBottom: '1px solid #CDD6DB',
          '&:after': {
            content: '" "',
          },
          '&[aria-orientation="vertical"]:after': {
            display: "none",
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          padding: '13px',
          color: '#4D4D4D',
          fontSize: 16,
          lineHeight: '22px',
          fontWeight: 400,
          textTransform: 'Capitalize',
          minHeight: 48,
          minWidth: 110,
          letterSpacing: '0.15px',
          fontFamily: '"Nunito", sans-serif',
          transition: 'all 200ms ease-in-out',
          '&.Mui-selected': {
            fontWeight: 700,
          },
          '&:hover': {
            backgroundColor: 'rgba(75, 0, 130, 0.1)',
            color: [LearningTheme.palette.primary.main],
          },
        },
      },
    },

    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: '20px 0 10px',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Nunito", sans-serif',
          boxShadow: 'none!important',
          textTransform: 'Capitalize',
          borderRadius: 36,
          minWidth: 'auto',
        },
        containedSizeSmall: {
          fontSize: 14,
          lineHeight: '20px',
          fontWeight: 700,
          padding: '6px 12px',
          letterSpacing: 0,
          '&.MuiIconButton': {
            padding: 6,
            '& .MuiAvatar-root': {
              width: 20,
              height: 20,
            },
          }
        },
        containedSizeMedium: {
          fontSize: 14,
          lineHeight: '20px',
          fontWeight: 700,
          padding: '10px 16px',
          letterSpacing: '0.1px',
          '&.MuiIconButton': {
            padding: 10,
            '& .MuiAvatar-root': {
              width: 20,
              height: 20,
            },
          }
        },
        containedSizeLarge: {
          fontSize: 16,
          lineHeight: '22px',
          fontWeight: 700,
          padding: '13px 24px',
          letterSpacing: '0.15px',
          '&.MuiIconButton': {
            padding: 12,
            [LearningTheme.breakpoints.down('md')]: {
              padding: 11,
              '& .MuiAvatar-root': {
                width: 20,
                height: 20,
              },
            },
          }
        },
        containedPrimary: {
          '&:hover, &:focus': {
            backgroundColor: [LearningTheme.palette.primary.dark],
          },
        },
        outlinedSizeSmall: {
          fontSize: 14,
          lineHeight: '18px',
          fontWeight: 700,
          padding: '6px 18px',
          letterSpacing: 0,
          '&.MuiIconButton': {
            padding: 5,
            '& .MuiAvatar-root': {
              width: 20,
              height: 20,
            },
          }
        },
        outlinedSizeMedium: {
          fontSize: 14,
          lineHeight: '18px',
          fontWeight: 700,
          padding: '10px 16px',
          letterSpacing: 0,
          '&.MuiIconButton': {
            padding: 9,
            '& .MuiAvatar-root': {
              width: 20,
              height: 20,
            },
          }
        },
        outlinedSizeLarge: {
          fontSize: 16,
          lineHeight: '20px',
          fontWeight: 700,
          padding: '13px 24px',
          letterSpacing: 0,
          '&.MuiIconButton': {
            padding: 11,
            [LearningTheme.breakpoints.down('md')]: {
              padding: 10,
              '& .MuiAvatar-root': {
                width: 20,
                height: 20,
              },
            },
          }
        },
        outlinedPrimary: {
          border: '1px solid #C9B3DA',
          '&:hover, &:focus': {
            backgroundColor: '#EDE6F3',
            borderColor: [LearningTheme.palette.primary.main],
          },
          '&.btn-outlined-primary-light': {
            color: '#FFFFFF',
            borderColor: 'rgba(255,255,255,0.48)',
            '& .button-font': {
              display: 'block',
              position: 'relative',
              zIndex: 1,
            },
            '&:before': {
              content: '" "',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 'inherit',
              zIndex: 0,
              backgroundColor: 'rgba(255,255,255,0.16)',
              backdropFilter: 'blur(12px)',
            },
            '&:hover, &:focus': {
              backgroundColor: 'rgba(255,255,255,0.24)',
              borderColor: 'rgba(255,255,255,0.1)',
            },
          },
        },
        outlinedInherit: {
          border: '1px solid #CDD6DB',
          color: [LearningTheme.palette.text.primary],
          '&:hover, &:focus': {
            backgroundColor: 'rgba(0,0,0,0.08)',
          },
          '&.btn-contained-white': {
            color: [LearningTheme.palette.primary.main],
            backgroundColor: 'rgba(255,255,255,1)',
            borderColor: '#C9B3DA',
            '&:hover, &:focus': {
              color: '#FFFFFF',
              backgroundColor: [LearningTheme.palette.primary.main],
            },
          },
        },
        textSizeSmall: {
          fontSize: 14,
          lineHeight: '20px',
          fontWeight: 700,
          padding: '6px 12px',
          letterSpacing: 0,
          '&.MuiIconButton': {
            padding: 6,
            '& .MuiAvatar-root': {
              width: 20,
              height: 20,
            },
          }
        },
        textSizeMedium: {
          fontSize: 16,
          lineHeight: '20px',
          fontWeight: 700,
          padding: '10px 16px',
          letterSpacing: '0.1px',
          // [LearningTheme.breakpoints.down('md')]: {
          //   padding: '8px 20px',
          // },
          '&.MuiIconButton': {
            padding: 10,
            '& .MuiAvatar-root': {
              width: 20,
              height: 20,
            },
          }
        },
        textSizeLarge: {
          fontSize: 16,
          lineHeight: '20px',
          fontWeight: 700,
          padding: '14px 24px',
          letterSpacing: '0.15px',
          '&.MuiIconButton': {
            padding: 12,
          }
        },
        textPrimary: {
          '&:hover, &:focus': {
            background: 'rgba(75,0,130,0.16)',
          },
        },
        iconSizeSmall: {
          margin: '-4px 6px -4px 0',
          '& .MuiAvatar-root': {
            width: 20,
            height: 20,
          },
        },
        startIcon: {
          margin: '-3px 10px -3px 0'
        },
        endIcon: {
          margin: '-3px 0 -3px 10px'
        },
      }
    },

    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root[aria-expanded="true"]': {
            background: 'rgba(75,0,130,0.12)',
          },
        },
      },
    },

    MuiBreadcrumbs: {
      styleOverrides: {
        li: {
          '& .MuiTypography-root': {
            color: [LearningTheme.palette.text.primary],
          },
        },
        separator: {
          '& .MuiAvatar-root': {
            width: 16,
            height: 16,
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: '"Nunito", sans-serif',
        },
        labelSmall: {
          fontSize: 16,
          lineHeight: '22px',
          fontWeight: 400,
          letterSpacing: "0.1px",
          paddingLeft: 20,
          paddingRight: 20,
        },
        labelMedium: {
          fontSize: 16,
          lineHeight: '22px',
          fontWeight: 400,
          letterSpacing: "0.15px",
          paddingLeft: 24,
          paddingRight: 24,
        },
        sizeSmall: {
          paddingTop: 10,
          paddingBottom: 10,
          height: 'auto',
          '&.size-exsmall': {
            paddingTop: 5,
            paddingBottom: 5,
          }
        },
        sizeMedium: {
          paddingTop: 12,
          paddingBottom: 12,
          height: 'auto',
          borderRadius: 24,
          border: '1px solid' + [LearningTheme.palette.info.light],
        },
        filledDefault: {
          backgroundColor: 'rgba(255, 255, 255, 0.24)',
          '& .MuiChip-label': {
            color: '#FFFFFF',
          },
        },
      }
    },

    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          margin: -5,
          flexWrap: 'wrap',
        },
        grouped: {
          margin: 5,
          backgroundColor: '#FFFFFF',
          '&.Mui-selected+.MuiToggleButtonGroup-grouped.Mui-selected': {
            marginLeft: 5,
            borderLeft: '1px solid #C9B3DA',
            backgroundColor: '#EDE6F3',
          },
        },
        lastButton: {
          borderLeft: '1px solid' + [LearningTheme.palette.info.light],
        },
        middleButton: {
          borderLeft: '1px solid' + [LearningTheme.palette.info.light],
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: '24px!important',
          color: [LearningTheme.palette.text.primary],
          '&.Mui-selected': {
            color: [LearningTheme.palette.text.primary],
            borderColor: '#C9B3DA',
          },
        },
        sizeSmall: {
          padding: '4px 16px',
          textTransform: 'Capitalize',
          fontFamily: '"Nunito", sans-serif',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "20px",
          letterSpacing: "0.10px",
          '&.more-toggle': {
            fontWeight: 700,
          }
        },
        sizeMedium: {
          padding: '11px 23px 11px 20px',
          textTransform: 'Capitalize',
          fontFamily: '"Nunito", sans-serif',
          fontSize: 16,
          fontWeight: 400,
          lineHeight: "20px",
          letterSpacing: "0.10px",
        },
        primary: {
          border: '1px solid' + [LearningTheme.palette.info.light],
        },
      }
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          color: [LearningTheme.palette.text.primary],
          borderRadius: 12,
          background: '#FFFFFF',
          boxShadow: '0px 3px 8px 0px rgba(149, 157, 165, 0.32)',
        },
        list: {
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: '"Nunito", sans-serif',
          fontSize: 14,
          lineHeight: '20px',
          letterSpacing: '0.1px',
          paddingLeft: 16,
          paddingRight: 16,
          '&:hover': {
            background: '#f4f4f4',
          },
          [LearningTheme.breakpoints.up('xs')]: {
            minHeight: 40,
          },
          // '&.Mui-selected': {
          //     background: '#E5E5E5',
          // },
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginRight: 8,
          minWidth: 'auto!important',
          '& .MuiAvatar-root': {
            width: 20,
            height: 20,
          }
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontSize: 14,
            lineHeight: '20px',
            letterSpacing: '0.1px',
            color: [LearningTheme.palette.text.primary],
          }
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          minHeight: '100%',
          borderRadius: 24,
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 2px 8px 0px rgba(149, 157, 165, 0.16)',
          '&.min-h-auto': {
            minHeight: 'auto',
          },
          [LearningTheme.breakpoints.down('md')]: {
            borderRadius: 16,
          },
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '20px 24px',
          '&:last-child': {
            paddingBottom: 20,
          },
          '& hr.card-negative': {
            marginLeft: -24,
            marginRight: -24,
          },
          [LearningTheme.breakpoints.down('md')]: {
            padding: 16,
            '&:last-child': {
              paddingBottom: 16,
            },
            '& hr.card-negative': {
              marginLeft: -16,
              marginRight: -16,
            },
          },
        },
      },
    },

    MuiCircularProgress: {
      styleOverrides: {
        svg: {
          strokeLinecap: 'round',
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        bar: {
          borderRadius: 8,
        },
        colorInherit: {
          '&::before': {
            backgroundColor: "#B3C3CC",
            opacity: .56,
          },
        },
        barColorInherit: {
          backgroundColor: [LearningTheme.palette.primary.main],
        }
      },
    },

    MuiTooltip: {
      styleOverrides: {
        popper: {
          '&[data-popper-placement*="bottom"]': {
            '& .MuiTooltip-tooltip': {
              marginTop: '8px!important',
            }
          },
        },
        tooltip: {
          padding: '10px 16px',
          fontSize: 14,
          lineHeight: '20px',
          letterSpacing: '0.1px',
          color: [LearningTheme.palette.text.primary],
          maxWidth: 220,
          backgroundColor: '#FFFFFF',
          borderRadius: 8,
          boxShadow: '0px 2px 8px 0px rgba(149, 157, 165, 0.16)',
        },
        arrow: {
          color: '#FFFFFF',
        }
      },
    },

    MuiDialog: {
      styleOverrides: {
        root: {
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0,0,0,0.52)',
          },
          '&.alert-dialog': {
            '& .MuiDialog-container': {
              '& .MuiDialog-paper': {
                '& .MuiDialogTitle-root': {
                  backgroundColor: 'transparent',
                },
              },
            },
          },
        },
        paper: {
          borderRadius: 24,
          margin: 16,
          maxWidth: 'calc(100% - 32px)',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 13px 27px -5px rgba(50, 50, 93, 0.25), 0px 8px 16px -8px rgba(0, 0, 0, 0.3)',
          minWidth: 345,
          [LearningTheme.breakpoints.down('md')]: {
            borderRadius: 16,
          }
        },
        paperWidthSm: {
          maxWidth: 576,
          width: 576,
        },
        paperWidthMd: {
          maxWidth: 748,
          width: 748,
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 22,
          backgroundColor: '#F1F4F6',
          '& .MuiClose-dialog': {
            margin: '-8px -8px -4px auto',
          },
          '& .MuiTypography-root': {
            margin: '-2px 12px -2px 0',
          },
          [LearningTheme.breakpoints.down('md')]: {
            padding: '16px 20px',
          },
        }
      }
    },

    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '16px 24px 24px!important',
          [LearningTheme.breakpoints.down('md')]: {
            padding: '16px 20px 20px!important',
          },
        },
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '20px 24px',
          justifyContent: 'flex-end',
          borderTop: '1px solid rgba(179, 195, 204, 0.56)',
          '& .MuiButtonBase-root': {
            marginLeft: '10px',
            minWidth: 110,
            '&:first-child': {
              marginLeft: 0,
            },
          },
          [LearningTheme.breakpoints.down('md')]: {
            padding: '16px 20px',
          },
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        root: {
          height: 8,
        },
        rail: {
          height: 8,
          opacity: 1,
          backgroundColor: '#F1F4F6',
        },
        thumb: {
          width: 26,
          height: 26,
          boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.24)',
          '&:before': {
            width: 14,
            height: 14,
            backgroundColor: '#FFFFFF',
          },
        },
        track: {
          backgroundColor: [LearningTheme.palette.primary.main],
          borderColor: [LearningTheme.palette.primary.main],
        },
        markActive: {
          backgroundColor: [LearningTheme.palette.primary.main],
        },
        mark: {
          width: 20,
          height: 20,
          borderRadius: 24,
          opacity: 1,
          transform: 'translate(-12px, -50%)',
          backgroundColor: '#F1F4F6',
        },
        markLabel: {
          width: 12,
          color: [LearningTheme.palette.text.secondary],
          fontFamily: '"Nunito", sans-serif',
          padding: 2,
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 8,
          borderRadius: '50%',
          color: '#BEBEBE',
          marginLeft: -8,
          width: 44,
          height: 44,
          '&.radio-check': {
            '& > span': {
              width: 24,
              height: 24,
            },
            '& .MuiTouchRipple-root': {
              width: 44,
              height: 44,
            },
            '& .MuiSvgIcon-root': {
              width: 20,
              height: 20,
              backgroundSize: "24px 24px",
            },
            '&.Mui-checked': {
              '& .MuiSvgIcon-root[data-testid="RadioButtonUncheckedIcon"]': {
                transform: 'scale(0)',
                width: 24,
                height: 24,
              },
              '& .MuiSvgIcon-root[data-testid="RadioButtonCheckedIcon"]': {
                transform: 'scale(1)',
                width: 24,
                height: 24,
                backgroundSize: '24px 24px',
              },
            },
          },
        },
        sizeSmall: {
          width: 36,
          height: 36,
          '&.radio-check': {
            '& > span': {
              width: 20,
              height: 20,
            },
            '& .MuiTouchRipple-root': {
              width: 36,
              height: 36,
            },
            '& .MuiSvgIcon-root': {
              width: 18,
              height: 18,
              backgroundSize: "20px 20px",
            },
            '&.Mui-checked': {
              '& .MuiSvgIcon-root[data-testid="RadioButtonUncheckedIcon"]': {
                transform: 'scale(0)',
                width: 20,
                height: 20,
              },
              '& .MuiSvgIcon-root[data-testid="RadioButtonCheckedIcon"]': {
                transform: 'scale(1)',
                width: 20,
                height: 20,
              },
            },
          },
        },
        colorPrimary: {
          '&.radio-check': {
            '& > span': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            '& .MuiSvgIcon-root': {
              border: 0,
              background: '#D5DEE3',
              borderRadius: '50%',
              '& path': {
                display: 'none',
              },
            },
            '&.Mui-checked': {
              '& .MuiSvgIcon-root[data-testid="RadioButtonUncheckedIcon"]': {
                transform: 'scale(0)',
              },
              '& .MuiSvgIcon-root[data-testid="RadioButtonCheckedIcon"]': {
                backgroundColor: 'transparent',
                backgroundImage: `url(${images.CheckedRadio})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center center',
              },
            }
          },
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          '&.Mui-expanded': {
            margin: 0,
            '&::before': {
              opacity: 1,
            }
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          flexDirection: 'row-reverse',
          [LearningTheme.breakpoints.down('md')]: {
            flexDirection: 'row',
          },
          '&.MuiButtonBase-root[aria-expanded="true"]': {
            backgroundColor: 'transparent',
          },
          '&.Mui-expanded': {
            minHeight: 'auto',
          }
        },
        content: {
          '& .accordion-number': {
            borderRadius: '50%',
            flexShrink: 0,
            padding: 5,
            fontWeight: 700,
            fontSize: 14,
            height: 30,
            minWidth: 30,
            lineHeight: '20px',
            backgroundColor: '#F1F4F6',
            textAlign: 'center',
            margin: '0 8px 0 10px',
            color: [LearningTheme.palette.text.primary],
            [LearningTheme.breakpoints.down('md')]: {
              margin: '0 10px 0 0',
            },
          },
          '& .title-data': {
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
          },
          alignItems: 'center',
          margin: '16px 0',
          [LearningTheme.breakpoints.down('md')]: {
            margin: '12px 0',
          },
          '&.Mui-expanded': {
            margin: '16px 0',
            [LearningTheme.breakpoints.down('md')]: {
              margin: '12px 0',
            },
          },
        },
        expandIconWrapper: {
          '& .MuiAvatar-root': {
            width: 20,
            height: 20,
          }
        }
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        }
      },
    },

    // MuiBadge: {
    //     styleOverrides: {
    //         root: {
    //             '& .MuiBadge-badge': {
    //                 fontSize: 12,
    //                 minWidth: 15,
    //                 lineHeight: 15,
    //                 height: 15,
    //                 borderRadius: 30,
    //                 top: 18,
    //                 right: 18,
    //                 padding: 0,
    //                 color: '#fff',
    //                 [LearningTheme.breakpoints.down('md')]: {
    //                     top: 12,
    //                     right: 12,
    //                 }
    //             },
    //         },
    //     },
    // },

    // MuiAlert: {
    //     styleOverrides: {
    //         root: {
    //             display: 'inline-flex',
    //             alignItems: 'center',
    //             padding: '6px 12px',
    //             [LearningTheme.breakpoints.down('sm')]: {
    //                 alignItems: 'flex-start',
    //             }
    //         },
    //         icon: {
    //             padding: 0,
    //             marginRight: '16px',
    //             [LearningTheme.breakpoints.down('sm')]: {
    //                 padding: '5px 0',
    //                 marginRight: '10px',
    //             }
    //         },
    //         message: {
    //             padding: '5.5px 0',
    //             fontFamily: '"Nunito", sans-serif',
    //             fontSize: 16,
    //             lineHeight: '20px',
    //             fontWeight: 400,
    //             display: 'inline-flex',
    //             alignItems: 'center',
    //             [LearningTheme.breakpoints.down('sm')]: {
    //                 fontSize: 14,
    //                 lineHeight: '18px',
    //             }
    //         },
    //         action: {
    //             paddingTop: 0,
    //             [LearningTheme.breakpoints.down('sm')]: {
    //                 paddingTop: '1px',
    //             }
    //         },
    //         outlinedSuccess: {
    //             border: '1px solid #54B865',
    //             backgroundColor: '#F7FFF4',
    //         },
    //         outlinedError: {
    //             border: '1px solid #F06433',
    //             backgroundColor: '#FFF6F7',
    //         },
    //         outlinedWarning: {
    //             border: '1px solid #E6AD42',
    //             backgroundColor: '#FFFDF0',
    //         },
    //         outlinedInfo: {
    //             border: '1px solid #5192B8',
    //             backgroundColor: '#F1FAFF',
    //         },
    //     },
    // },

    // MuiTableCell: {
    //     styleOverrides: {
    //         root: {
    //         },
    //         head: {
    //             padding: '9.5px 20px',
    //             fontSize: 17,
    //             lineHeight: '21px',
    //             height: 45,
    //             color: '#4D4D4D',
    //             fontFamily: '"Nunito", sans-serif',
    //             background: '#F4F4F4',
    //             borderBottomColor: '#E0E0E0',
    //             whiteSpace: 'nowrap',
    //         },
    //         body: {
    //             padding: '10px 20px',
    //             fontSize: 16,
    //             lineHeight: '20px',
    //             height: 60,
    //             color: '#757575',
    //             fontFamily: '"Nunito", sans-serif',
    //             borderBottomColor: '#E0E0E0',
    //             '& .username': {
    //                 display: 'flex',
    //                 alignItems: 'center',
    //                 whiteSpace: 'nowrap',
    //             },
    //         },
    //     },
    // },

    // MuiTableSortLabel: {
    //     styleOverrides: {
    //         root: {
    //             '&:hover,&.Mui-active .MuiTableSortLabel-icon, &:hover .MuiTableSortLabel-icon, &:focus': {
    //                 color: '#1976D2',
    //             },
    //         },
    //         icon: {
    //             opacity: 1,
    //             color: '#4D4D4D',
    //         },
    //     },
    // },

    // MuiTablePagination: {
    //     styleOverrides: {
    //         toolbar: {
    //             paddingLeft: 0,
    //             paddingTop: 16,
    //             [LearningTheme.breakpoints.down('sm')]: {
    //                 paddingTop: 16,
    //                 paddingLeft: 0,
    //                 flexWrap: 'wrap',
    //                 justifyContent: 'center',
    //             }
    //         },
    //         selectLabel: {
    //             fontFamily: '"Nunito", sans-serif',
    //             fontSize: 16,
    //             lineHeight: '20px',
    //         },
    //         displayedRows: {
    //             fontFamily: '"Nunito", sans-serif',
    //             fontSize: 16,
    //             lineHeight: '20px',
    //         },
    //         input: {
    //             marginRight: 24,
    //             marginLeft: 8,
    //         },
    //         select: {
    //             borderRadius: 4,
    //             fontFamily: '"Nunito", sans-serif',
    //             minHeight: '18px!important',
    //         },
    //         selectIcon: {
    //             marginTop: 3.5,
    //             marginRight: 2,
    //             backgroundSize: '12px 12px',
    //         },
    //         actions: {
    //             marginLeft: 10,
    //             [LearningTheme.breakpoints.down('sm')]: {
    //                 minWidth: '100%',
    //                 margin: '0 auto',
    //                 textAlign: 'center',
    //                 marginTop: 4,
    //             }
    //         }
    //     }
    // },
  },
});

export default LearningTheme;
