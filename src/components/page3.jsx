function Page3(){
    return(<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
       <div style={{width: "40%"}}>
       
       <p>Quick Lending</p>
        <h1>Who <span style={{color: "red"}}>We</span> Are</h1>
        <hr
          style={{
            backgroundColor: "blue",
            border: "none",
            borderRadius: "5px",
            width: "50px",
            padding: "2px 3px",
          }}
       
        /> 
        <p>As a client-focused, boutique private lender, we’re flexible enough to cater to most needs and nimble enough to execute quickly. We pride ourselves on the ability to make a fast decision and execute seamlessly.</p>
         <ul style={{display: "flex", flexDirection: "column", justifyContent: "left"}}>
            <li>Extended support for borrowers</li>
            <li>Your success is our focus</li>
            <li>We fund, fix and flip all transactional deals</li>
         </ul>
       </div>
       <div style={{width: "60%"}}>
        <img src="https://png.pngtree.com/png-clipart/20231006/ourmid/pngtree-handsome-businessman-transparent-background-png-image_10194933.png"/>
       </div>
    </div>)
}

export default Page3;