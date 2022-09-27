import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import zIndex from '@mui/material/styles/zIndex';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import TestimonialPage from '../components/TestimonialPage';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Index() {

  return (
    // first page state
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12} sm={12} md={12}>
          <Item>
          <div class='hero-text'>
          <img src='http://localhost:3000/img/logo_2.png' width="30%" height="23%" className='img-kapiva'/>
           <h1 className='h1-4_balance'>4 BALANCE</h1>
           {/* <div class="div-Img"></div> */}
          </div> 
          <br/>
          <div>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
            <div className='div-images1'>
                            {/* <Card sx={{ minWidth: 275 }} className="card1"> */}
                              <CardContent>
                                <Grid container spacing={2} columns={16}>
                                  <Grid item xs={8}>
                                    <img src='../img/icon-diet.png' alt='img1' width="100px" height="110px"/>  
                                    </Grid>
                                     <Grid item xs={8}>
                                      <Typography >
                                      <span className='span-contain1'>
                                       Coustom Diet Plan<br/>
                                       You are what<br/>
                                       You eat
                                      </span>
                                      </Typography>
                                   </Grid>
                                 </Grid>     
                                </CardContent>
                              {/* </Card> */}
                          </div>
            </Grid>
            <Grid item xs={6} md={6}>
            <div className='div-images1'>
                            {/* <Card sx={{ minWidth: 275 }} className="card1"> */}
                              <CardContent>
                                <Grid container spacing={2} columns={16}>
                                  <Grid item xs={8}>
                                    <img src='../img/icon-lifestyle.png' alt='img1' width="100px" height="110px"/>  
                                    </Grid>
                                     <Grid item xs={8}>
                                      <Typography >
                                      <span className='span-contain1'>
                                       Lifestyle Practices<br/>
                                       Small changes<br/>
                                       Long term result
                                      </span>
                                      </Typography>
                                   </Grid>
                                 </Grid>     
                                </CardContent>
                              {/* </Card> */}
                          </div>
            </Grid>
            <br/>
            <Grid item xs={6} md={6}>
            <div className='div-images1'>
                            {/* <Card sx={{ minWidth: 275 }} className="card1"> */}
                              <CardContent>
                                <Grid container spacing={2} columns={16}>
                                  <Grid item xs={8}>
                                    <img src='../img/icon-products.png' alt='img1' width="100px" height="110px"/>  
                                    </Grid>
                                     <Grid item xs={8}>
                                      <Typography >
                                      <span className='span-contain1'>
                                       Ayurvedic products<br/>
                                       Organic & Safe<br/>
                                       to use
                                      </span>
                                      </Typography>
                                   </Grid>
                                 </Grid>     
                                </CardContent>
                              {/* </Card> */}
                          </div>
            </Grid>
            <Grid item xs={6} md={6}>
            <div className='div-images1'>
                            {/* <Card sx={{ minWidth: 275 }} className="card1"> */}
                              <CardContent>
                                <Grid container spacing={2} columns={16}>
                                  <Grid item xs={8}>
                                    <img src='../img/icon-experts.png' alt='img1' width="100px" height="110px"/>  
                                    </Grid>
                                     <Grid item xs={8}>
                                      <Typography >
                                      <span className='span-contain1'>
                                       Expert on Call<br/>
                                       Guidance, Made<br/>
                                       for you
                                      </span>
                                      </Typography>
                                   </Grid>
                                 </Grid>     
                                </CardContent>
                              {/* </Card> */}
                          </div>
                     </Grid>
                </Grid>
             </div>  
             <br/>
             <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <h2 className='h2-contain'>
                    Learn To Listen To What your Body Tells, Through Our<br/>
                    Customized Weight Care Programme
                  </h2>
                </Grid>
            </Grid>
            <br/>
            <Grid container spacing={2}>
                <Grid item xs={9} sm={9} md={9} lg={9} >
                 *Result my very from person to person. In case of any issues you maybe facing.<br/>
                  Consult our Nutritionist now
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <span className='span-call-icon'>
                     <WifiCalling3Icon/>
                  </span>
                </Grid>
             </Grid>
             <br/>
             {/* second page */}
             <div className='div-socondpage-main'>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                   <div className='div-secondImg'>
                   <img src='http://localhost:3000/img/logo_2.png' width="30%" height="23%" className='img-kapiva'/>
                   </div>      
                    <p className='p-soconpage-contain'>
                       <h1 className='h3-socond-contain'>Ayurvedic Weight Care Plan</h1>
                    </p>        
                </Grid>
              </Grid>

             {/* start first card */}

              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                     <Grid item xs={6}>
                        <div className='div-secondpage-card'>
                         <CardContent>
                         <Grid container spacing={2} columns={16}>
                              <Grid item xs={8}>  
                              <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                               <span className='span-secondpage-cardinfo'> Daily Weight-Ins</span>
                                </Typography>
                                <Typography>
                                 <span className='span-secondpage-cardinfo1'>
                                  Warking up before the kapiva period<br/> 
                                  begins(6am) help <br/>
                                  the body to be more active<br/>
                                 </span>
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <span className='span-secondpage-cardinfo2'>
                                Week1 Week 4
                                </span>
                                 
                                </Typography>
                               
                              </Grid>
                              <Grid item xs={4}>  
                               <div className='span-secondpage-cardinfo3'>
                                6 AM  <br/>
                                every <br/>
                                Morning
                               </div>
                              </Grid>
                          </Grid> 
                              
                          </CardContent>
                        </div>
                     </Grid>     
                     <Grid item xs={6}>
                      
                     </Grid>
                   </Grid>
                </Grid>

                {/* end first card */}

               {/* seconde card */}

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {/* xs=8 */}
                  </Grid>
                  <Grid item xs={6}>
                      <div className='div-secondpage-card'>
                         <CardContent>
                         <Grid container spacing={2} columns={16}>
                              <Grid item xs={8}>  
                              <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                               <span className='span-secondpage-cardinfo'> Daily Weight-Ins</span>
                                </Typography>
                                <Typography>
                                 <span className='span-secondpage-cardinfo1'>
                                  Warking up before the kapiva period<br/> 
                                  begins(6am) help <br/>
                                  the body to be more active<br/>
                                 </span>
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <span className='span-secondpage-cardinfo2'>
                                Week1 Week 4
                                </span>
                                 
                                </Typography>
                               
                              </Grid>
                              <Grid item xs={4}>  
                               <div className='span-secondpage-cardinfo3'>
                                6 AM  <br/>
                                every <br/>
                                Morning
                               </div>
                              </Grid>
                          </Grid> 
                              
                          </CardContent>
                      </div>
                  </Grid>
               </Grid>

             {/* end second card */}

            {/* start third card */}

             <Grid container spacing={2}>
                  <Grid item xs={6}>
                      <div className='div-secondpage-card'>
                         <CardContent>
                         <Grid container spacing={2} columns={16}>
                              <Grid item xs={8}>  
                              <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                               <span className='span-secondpage-cardinfo'> Daily Weight-Ins</span>
                                </Typography>
                                <Typography>
                                 <span className='span-secondpage-cardinfo1'>
                                  Warking up before the kapiva period<br/> 
                                  begins(6am) help <br/>
                                  the body to be more active<br/>
                                 </span>
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <span className='span-secondpage-cardinfo2'>
                                Week1 Week 4
                                </span>
                                 
                                </Typography>
                               
                              </Grid>
                              <Grid item xs={4}>  
                               <div className='span-secondpage-cardinfo3'>
                                6 AM  <br/>
                                every <br/>
                                Morning
                               </div>
                              </Grid>
                          </Grid> 
                              
                          </CardContent>
                      </div>
                  </Grid>
                  <Grid item xs={6}>

                  </Grid>
               </Grid>

            {/* end third card */}


            {/* start forurth card */}
 
            <Grid container spacing={2}>
                  <Grid item xs={6}>
                      
                  </Grid>
                  <Grid item xs={6}>
                     <div className='div-secondpage-card'>
                         <CardContent>
                         <Grid container spacing={2} columns={16}>
                              <Grid item xs={8}>  
                              <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                               <span className='span-secondpage-cardinfo'> Daily Weight-Ins</span>
                                </Typography>
                                <Typography>
                                 <span className='span-secondpage-cardinfo1'>
                                  Warking up before the kapiva period<br/> 
                                  begins(6am) help <br/>
                                  the body to be more active<br/>
                                 </span>
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <span className='span-secondpage-cardinfo2'>
                                Week1 Week 4
                                </span>
                                 
                                </Typography>
                               
                              </Grid>
                              <Grid item xs={4}>  
                               <div className='span-secondpage-cardinfo3'>
                                6 AM  <br/>
                                every <br/>
                                Morning
                               </div>
                              </Grid>
                          </Grid> 
                              
                          </CardContent>
                      </div>
                  </Grid>
               </Grid>
            
            {/* end fourth cart */}


            {/* start fiveth cart */}

            <Grid container spacing={2}>
                  <Grid item xs={6}>
                     <div className='div-secondpage-card'>
                         <CardContent>
                         <Grid container spacing={2} columns={16}>
                              <Grid item xs={8}>  
                              <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                               <span className='span-secondpage-cardinfo'> Daily Weight-Ins</span>
                                </Typography>
                                <Typography>
                                 <span className='span-secondpage-cardinfo1'>
                                  Warking up before the kapiva period<br/> 
                                  begins(6am) help <br/>
                                  the body to be more active<br/>
                                 </span>
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <span className='span-secondpage-cardinfo2'>
                                Week1 Week 4
                                </span>
                                 
                                </Typography>
                               
                              </Grid>
                              <Grid item xs={4}>  
                               <div className='span-secondpage-cardinfo3'>
                                6 AM  <br/>
                                every <br/>
                                Morning
                               </div>
                              </Grid>
                          </Grid> 
                              
                          </CardContent>
                      </div>
                      
                  </Grid>
                  <Grid item xs={6}>
                     
                  </Grid>
               </Grid>

              {/* end fivth cart */}

              {/* start sisth cart */}

              <Grid container spacing={2}>
                  <Grid item xs={6}>
                    
                  </Grid>
                  <Grid item xs={6}>
                  <div className='div-secondpage-card'>
                         <CardContent>
                         <Grid container spacing={2} columns={16}>
                              <Grid item xs={8}>  
                              <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                               <span className='span-secondpage-cardinfo'> Daily Weight-Ins</span>
                                </Typography>
                                <Typography>
                                 <span className='span-secondpage-cardinfo1'>
                                  Warking up before the kapiva period<br/> 
                                  begins(6am) help <br/>
                                  the body to be more active<br/>
                                 </span>
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <span className='span-secondpage-cardinfo2'>
                                Week1 Week 4
                                </span>
                                 
                                </Typography>
                               
                              </Grid>
                              <Grid item xs={4}>  
                               <div className='span-secondpage-cardinfo3'>
                                6 AM  <br/>
                                every <br/>
                                Morning
                               </div>
                              </Grid>
                          </Grid> 
                              
                          </CardContent>
                      </div>
                      
                  </Grid>
               </Grid> 

              {/* end sisth cart */}

             </div>
           <br/><br/>
            
          {/* statr third page */}
         <div className='div-thirdpage-main'>
          <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                   <div className='div-thirdImg'>
                   <img src='http://localhost:3000/img/logo_2.png' width="30%" height="23%" className='img-kapiva'/>
                   </div>      
                    <p className='p-thirdpage-contain'>
                       <h1 className='h3-third-contain'>
                         We do what's difficult to make<br/>
                         Ayurveda accessible for you          
                       </h1>
                    </p>        
                </Grid>
                <Grid item xs={4}>
                 <div className='span_thirdcardImg'>
                 <h1 className='h1_ritals'>skin</h1>
                 <img src='http://localhost:3000/img/img_card1.jpg' width="65%" height="70%" className='img-kapiva'/>
                 
                 </div>
                 <div className='div_thirdCart_cfild'>
                  
                 vasible skin glow in <br/>
                     21 days
                 </div>
                </Grid>

                <Grid item xs={4}>
                <div className='span_thirdcardImg'>
                <h1 className='h1_ritals'>skin</h1>
                 <img src='http://localhost:3000/img/img_card1.jpg' width="65%" height="70%" className='img-kapiva'/>
                 
                 </div>
                 <div className='div_thirdCart_cfild'> 25 % less hair fall<br/>
                      in 2 months
                 </div>
                </Grid>

                <Grid item xs={4}>
                <div className='span_thirdcardImg'>
                <h1 className='h1_ritals'>skin</h1>
                 <img src='http://localhost:3000/img/img_card1.jpg' width="65%" height="70%" className='img-kapiva'/>
                 
                 </div>
                 <div className='div_thirdCart_cfild'> 70 % user lose <br/>
                      Weight in 45 days
                 </div>
                </Grid>
             </Grid>   
             <br/>
             <Grid container spacing={2}>
                <Grid item xs={12}>
                 <div className='div_thirdpage_para'>
                   <h1 className='h1_Customers_para'>3 Lakh + Happy Customers</h1>
                 </div>
                </Grid>
            </Grid>
            <br/>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <div className='div_thiredPage_testimonial'>
                      <TestimonialPage/>
                  </div>
                </Grid>
            </Grid>    
         </div>
         
          {/* end the third page */}

           {/* forth page satart */}
         <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className='div-fouthImg'>
                <img src='http://localhost:3000/img/logo_2.png' width="30%" height="23%" className='img-kapiva'/>
                </div>      
                <p className='p-fouthpage-contain'>
                    <h1 className='h1-four-contain'>
                     4 balance
                    </h1>
                </p>        
            </Grid>
          </Grid>  
          <br/>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
             <div className='div_forbalance-list'>
                 <ul>
                     <li><h1>100% Ayurvedic</h1></li>
                     <li><h1>Customized For You</h1></li>
                     <li><h1>Long Term Weight Care</h1></li>
                 </ul>
             </div>

            </Grid>
          </Grid>  
          <br/>
           
          <Grid container spacing={2}>
            <Grid item xs={12} lg={12} sm={12} md={12}>
              <div class='hero-text'>
                <h1 className='h1-fourthpage-contain'>
                 The 4 Balance Journey is best experienced on the app
                </h1>
                <button className='btn-download'>
                   download now
                </button>
              {/* <div class="div-Img"></div> */}
              </div>
            </Grid>
          </Grid>    

           {/* end the forth page */}

          </Item>
        </Grid>
      </Grid>
    </Box>
    <br/>
    
    </div>
  )
}
