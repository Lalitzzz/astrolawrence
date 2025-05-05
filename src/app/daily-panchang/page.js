'use client';
import { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  TextField,
  Button,
  CircularProgress,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Divider,
  Autocomplete,
  Tabs,
  Tab,
  useMediaQuery,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { 
  WbSunny as SunriseIcon, 
  Brightness3 as SunsetIcon,
  NightsStay as MoonriseIcon,
  Bedtime as MoonsetIcon,
  CalendarToday as DateIcon,
  LocationOn as LocationIcon,
  Event as FestivalIcon,
  Search as SearchIcon,
  Refresh as RefreshIcon,
  Print as PrintIcon,
  Share as ShareIcon,
  Translate as TranslateIcon
} from '@mui/icons-material';
import { format, parseISO } from 'date-fns';
import axios from 'axios';

// Hindi translations
const translations = {
  en: {
    title: "Daily Panchang",
    date: "Date",
    location: "Location",
    search: "Search",
    tithi: "Tithi",
    nakshatra: "Nakshatra",
    yoga: "Yoga",
    karana: "Karana",
    sunrise: "Sunrise",
    sunset: "Sunset",
    moonrise: "Moonrise",
    moonset: "Moonset",
    festivals: "Festivals & Events",
    rahuKalam: "Rahu Kalam",
    gulikaKalam: "Gulika Kalam",
    yamagandaKalam: "Yamaganda Kalam",
    tryAgain: "Try Again",
    error: "Error fetching data",
    print: "Print",
    share: "Share",
    calculating: "Calculating...",
    noData: "--:--"
  },
  hi: {
    title: "दैनिक पंचांग",
    date: "तारीख",
    location: "स्थान",
    search: "खोजें",
    tithi: "तिथि",
    nakshatra: "नक्षत्र",
    yoga: "योग",
    karana: "करण",
    sunrise: "सूर्योदय",
    sunset: "सूर्यास्त",
    moonrise: "चंद्रोदय",
    moonset: "चंद्रास्त",
    festivals: "त्योहार और उत्सव",
    rahuKalam: "राहु काल",
    gulikaKalam: "गुलिक काल",
    yamagandaKalam: "यमगंड काल",
    tryAgain: "पुनः प्रयास करें",
    error: "डेटा प्राप्त करने में त्रुटि",
    print: "प्रिंट",
    share: "शेयर",
    calculating: "गणना चल रही है...",
    noData: "--:--"
  }
};

// Indian cities for autocomplete
const indianCities = [
  'New Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 
  'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
  'Jaipur', 'Surat', 'Lucknow', 'Kanpur',
  'Nagpur', 'Patna', 'Bhopal'
];

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: [
      'Noto Sans',
      'Noto Sans Devanagari',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default function DailyPanchang() {
  const [panchang, setPanchang] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [place, setPlace] = useState('New Delhi');
  const [language, setLanguage] = useState('en');
  const isMobile = useMediaQuery('(max-width:600px)');

  const t = translations[language];

  const fetchPanchang = async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (!indianCities.includes(place)) {
        throw new Error('Selected location is not supported. Please choose from the list.');
      }

      const response = await axios.get('/api/panchang', {
        params: { 
          date, 
          place,
          _: new Date().getTime() // Cache buster
        }
      });
      
      if (!response.data) {
        throw new Error('No data received');
      }
      
      // Ensure all required fields have values
      const completePanchang = {
        date: response.data.date || date,
        location: {
          place: response.data.location?.place || place,
          latitude: response.data.location?.latitude || '',
          longitude: response.data.location?.longitude || '',
          timezone: response.data.location?.timezone || 'Asia/Kolkata'
        },
        tithi: response.data.tithi || t.calculating,
        nakshatra: response.data.nakshatra || t.calculating,
        yoga: response.data.yoga || t.calculating,
        karana: response.data.karana || t.calculating,
        sunrise: response.data.sunrise || t.noData,
        sunset: response.data.sunset || t.noData,
        moonrise: response.data.moonrise || t.noData,
        moonset: response.data.moonset || t.noData,
        rahuKalam: response.data.rahuKalam || t.calculating,
        gulikaKalam: response.data.gulikaKalam || t.calculating,
        yamagandaKalam: response.data.yamagandaKalam || t.calculating,
        festivals: response.data.festivals || []
      };
      
      setPanchang(completePanchang);
    } catch (err) {
      console.error('Error fetching panchang:', err);
      setError(err.response?.data?.error || err.message || t.error);
      
      if (err.message.includes('location')) {
        setPlace('New Delhi');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPanchang();
  }, [date, place, language]);

  const handleRefresh = () => {
    fetchPanchang();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPanchang();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: t.title,
        text: `${t.title} for ${place} - ${date}`,
        url: window.location.href,
      });
    } catch (err) {
      console.log('Sharing failed:', err);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const renderError = () => (
    <Box sx={{ p: 3, backgroundColor: '#ffeeee', borderRadius: 1, textAlign: 'center' }}>
      <Typography color="error" variant="h6">
        {error}
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={fetchPanchang}
        sx={{ mt: 2 }}
        startIcon={<RefreshIcon />}
      >
        {t.tryAgain}
      </Button>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static" color="primary" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t.title}
            </Typography>
            <IconButton color="inherit" onClick={toggleLanguage}>
              <TranslateIcon />
              <Typography variant="caption" sx={{ ml: 1 }}>
                {language === 'en' ? 'हिंदी' : 'English'}
              </Typography>
            </IconButton>
            <IconButton color="inherit" onClick={handlePrint}>
              <PrintIcon />
            </IconButton>
            <IconButton color="inherit" onClick={handleShare}>
              <ShareIcon />
            </IconButton>
            <IconButton color="inherit" onClick={handleRefresh}>
              <RefreshIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={5}>
                  <TextField
                    fullWidth
                    type="date"
                    label={t.date}
                    variant="outlined"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Autocomplete
                    freeSolo
                    options={indianCities}
                    value={place}
                    onChange={(e, newValue) => setPlace(newValue)}
                    renderInput={(params) => (
                      <TextField 
                        {...params} 
                        label={t.location} 
                        variant="outlined" 
                        placeholder={language === 'hi' ? "शहर चुनें" : "Select city"}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SearchIcon />}
                  >
                    {t.search}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>

          {loading ? (
            <Box display="flex" justifyContent="center" my={4}>
              <CircularProgress />
            </Box>
          ) : error ? (
            renderError()
          ) : panchang ? (
            <div>
              {/* Date and Location Card */}
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box display="flex" alignItems="center" mb={1}>
                        <DateIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6">
                          {format(parseISO(panchang.date), language === 'hi' ? 'EEEE, MMMM do yyyy' : 'EEEE, MMMM do yyyy')}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mb={1}>
                        <LocationIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="subtitle1">
                          {panchang.location?.place || place}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box display="flex" alignItems="center" mb={1}>
                        <SunriseIcon color="primary" sx={{ mr: 1 }} />
                        <Typography>{t.sunrise}: {panchang.sunrise}</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mb={1}>
                        <SunsetIcon color="primary" sx={{ mr: 1 }} />
                        <Typography>{t.sunset}: {panchang.sunset}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Tithi, Nakshatra, Yoga, Karana Cards */}
              <Grid container spacing={3}>
                {[
                  { key: 'tithi', value: panchang.tithi },
                  { key: 'nakshatra', value: panchang.nakshatra },
                  { key: 'yoga', value: panchang.yoga },
                  { key: 'karana', value: panchang.karana },
                ].map((item) => (
                  <Grid item xs={12} sm={6} md={3} key={item.key}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom color="primary">
                          {t[item.key]}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                          {item.value}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Moon and Kalam Times Section */}
              <Grid container spacing={3} sx={{ mt: 1 }}>
                {[
                  { key: 'moonrise', value: panchang.moonrise, icon: <MoonriseIcon sx={{ mr: 1 }} /> },
                  { key: 'moonset', value: panchang.moonset, icon: <MoonsetIcon sx={{ mr: 1 }} /> },
                  { key: 'rahuKalam', value: panchang.rahuKalam },
                  { key: 'gulikaKalam', value: panchang.gulikaKalam },
                  { key: 'yamagandaKalam', value: panchang.yamagandaKalam },
                ].map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.key}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom color="primary">
                          {t[item.key]}
                        </Typography>
                        {item.icon ? (
                          <Box display="flex" alignItems="center">
                            {item.icon}
                            <Typography variant="h5">{item.value}</Typography>
                          </Box>
                        ) : (
                          <Typography variant="h5">{item.value}</Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Festivals Section */}
              {panchang.festivals && panchang.festivals.length > 0 && (
                <Card sx={{ mt: 3 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary">
                      <FestivalIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      {t.festivals}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <ul style={{ paddingLeft: '20px' }}>
                      {panchang.festivals.map((festival, index) => (
                        <li key={index}>
                          <Typography>{festival}</Typography>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : null}
        </Container>
      </div>
    </ThemeProvider>
  );
}