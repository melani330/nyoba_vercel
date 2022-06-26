import "../css/coach.css";
import * as React from 'react';
import Typography from '@mui/material/Typography';

 const Coach = (props) => {
    return (
      <div id='team' className='text-center'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title'>
          <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              class="judul_coach"
            >
              Coach Di Usahakuy
            </Typography>
            <Typography
              component="h5"
              variant="h6"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Bertemu coach dari berbagai industri terkemuka
            </Typography>
          </div>
          <div className='row'>
            {props.DataCoach.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-xs-6 col-md-3 team'>
                    <div className='thumbnail'>
                      {' '}
                      <img src={d.img} alt='...' className='team-img' />
                      <div className='caption'>
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    )
  }
  export default Coach;