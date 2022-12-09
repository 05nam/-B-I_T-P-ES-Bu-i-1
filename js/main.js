let HoverMe = () => {
  let heading = document.querySelector(".heading").innerText;
  //   console.log(typeof heading);
  let char = [...heading];
  console.log(char);
  let fullSpan = "";
  for (var i = 0; i < char.length; i++) {
    let span = char[i];
    fullSpan += `
    <span> ${span}  </span>
`;
  }
  document.querySelector(".heading").innerHTML = fullSpan;
};
HoverMe();
