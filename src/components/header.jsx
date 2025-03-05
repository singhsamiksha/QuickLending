function Header(){
    return(<div className="navbar">
    <div className="logo">
        <img src="https://www.quicklending.com/assets/images/homepage3/PNG/QL_Logo_White.png" width={"150px"}/>
    </div>
    <div className="menu-list">
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Get estimate</li>
            <li><button style={{backgroundColor: "white", color: "rgb(19, 24, 48)", fontWeight: 700}}>Borrower Portal</button></li>
            <li><button style={{backgroundColor: "red", color: "white", fontWeight: 700}}>Company Portal</button></li>
        </ul>
    </div>
    </div>)
}

export default Header;