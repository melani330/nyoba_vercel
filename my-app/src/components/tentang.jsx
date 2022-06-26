
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import gambar from "./meeting-bro.svg";
import "../css/tentang.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#4fc3f7',
            },
        },
    }
);

export default function Tentang() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 15,
            pb: 6,
            // display: 'flex', flexDirection: 'row',
            width: '100%' 
          }}
        >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} >
            <CardMedia
            component="img"
            className="tentang_image"
            image={gambar}
            alt="Live from space album cover"
          />
        </Grid>
        <Grid item xs={6}>
            <Typography
              component="h3"
              variant="h4"
              align="left"
              color="text.primary"
              gutterBottom
              className="judul"
            >
              Tentang Usahakuy<span>.</span>ID
            </Typography>
           
            <Typography variant="h8" align="left" color="text.secondary" paragraph>
            Usahakuy.id merupakan pelatihan kewirausahaan berbasis website. Usahakuy.id menawarkan pelatihan-pelatihan menarik yang sangat dibutuhkan dalam dunia entrepreneur atau kewirausahaan melalui coaching yang diberikan untuk mempersiapkan calon wirausahawan agar dapat menjadi wirausahawan yang sukses dengan membantu meningkatkan kapasitas dan kemampuan SDM pelaku wirausaha dan masyarakat yang belum mampu mengatasi persoalan di dunia kewirausahaan.
            </Typography>
            <Stack
              sx={{ pt: 6 }}
              direction="row"
              spacing={5}
              justifyContent="left"
              padding-right="20px"
            >
              <button className='btn btn-custom'>
                  Daftar Sekarang
                </button>
              {/* <Button variant="contained" background-color="primary">Daftar Sekarang</Button> */}
            </Stack>
          </Grid>
          </Grid>
        </Box>
       
      </main>
   
    </ThemeProvider>
  );
}
