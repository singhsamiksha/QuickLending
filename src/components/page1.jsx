import Header from "./header";
function Page1(){
    return(<>
    <Header/>
    <div className="main" style={{padding: "50px 50px"}}>
        <h1>Learn how we are <span style={{color: "red"}}>Different</span> from </h1>
        <h1>other lenders.</h1>
        <hr style={{backgroundColor:"red", border: "none", borderRadius: "5px", width: "50px", padding: "2px 3px", margin: "15px"}}></hr>
        <p style={{fontWeight: "300", marginBottom: "50px"}}>Get your loan Quickly and efficiently.</p>
        <button className="outer" style={{ backgroundColor: "white", padding: "1.5px", border: "solid 1px red", color: "black", fontSize: "20px", fontWeight: "600"}}>
            <button className="inner" style={{backgroundColor: "red",padding: "15px 20px", fontWeight: "600"}}>Apply now</button>→</button>
    </div>
    </>)
}

export default Page1;