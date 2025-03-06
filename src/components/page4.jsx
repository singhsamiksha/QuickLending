import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
function Page4(){
    return(<div style={{ display: "flex", justifyContent: "space-between"}}>
        <div style={{}}>
       
       <p>Testimonial</p>
        <h1>What People Think of Us</h1>
        
        <hr
          style={{
            backgroundColor: "blue",
            border: "none",
            borderRadius: "5px",
            width: "50px",
            padding: "2px 3px",
          }}
       
        /> 
        <p>Lorem ipsum dolor sit amet consectetur. Sodales risus suspendisse ullamcorper etiam vel mi eleifend nisi.</p>
       </div>
       <div style={{}}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/036/473/286/small_2x/ai-generated-happy-woman-on-transparent-background-png.png"/>
       </div>
       <div style={{}}>
        <p>“James and his team are my go-to source for any transaction we are considering. They are courteous, efficient and quick to get you to the closing table.”</p>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <h4>Linda</h4>
            <p>stars</p>
        </div>
       </div>
    </div>)
}

export default Page4;