import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar, Toolbar, Typography, Container, Grid, Paper,
  Button, Box, Tabs, Tab, CircularProgress, Alert
} from '@mui/material';
import { BarChart as BarChartIcon, CloudUpload, Assessment } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (file) => {
    setLoading(true);
    // Simulate file upload
    setTimeout(() => {
      setLoading(false);
      setTabValue(1);
    }, 2000);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <BarChartIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Data Visualization Studio v2.0
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
                <Tab label="Dashboard" icon={<Assessment />} />
                <Tab label="Upload Data" icon={<CloudUpload />} />
                <Tab label="Visualize" icon={<BarChartIcon />} />
              </Tabs>
              
              <TabPanel value={tabValue} index={0}>
                <Typography variant="h6">Welcome to Data Visualization Studio</Typography>
                <Typography variant="body2" color="text.secondary">
                  Upload your data files to get started with powerful visualizations.
                </Typography>
              </TabPanel>
              
              <TabPanel value={tabValue} index={1}>
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <CloudUpload sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Upload Your Data Files
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Support for CSV, Excel (.xlsx, .xls), and PDF files
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<CloudUpload />}
                    onClick={() => handleFileUpload()}
                  >
                    Choose File to Upload
                  </Button>
                </Box>
              </TabPanel>
              
              <TabPanel value={tabValue} index={2}>
                <Typography variant="h6">Visualization Tools</Typography>
                <Typography variant="body2" color="text.secondary">
                  Chart configuration and preview will appear here.
                </Typography>
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
        >
          <CircularProgress size={60} />
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
