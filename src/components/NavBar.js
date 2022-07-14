import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkData = links.map((link) =>  <a key={link} href={"#" +link}>{link}</a>)
  console.log(linkData)
  return <nav>{/* display an <a> tag for each link here */}
  {linkData}
  </nav>;
}

export default NavBar;
