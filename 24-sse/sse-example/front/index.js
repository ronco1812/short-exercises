const source = new EventSource("http://localhost:3000/api/fetch/stocks");

source.onmessage = function logEvents(event) {
  const stocksData = JSON.parse(event.data);
  console.log(JSON.parse(event.data));
  document.getElementById("TSLA").innerHTML =
    stocksData[0].displayName +
    " " +
    stocksData[0].bookValue +
    " " +
    new Date().toLocaleString();
  document.getElementById("APPL").innerHTML = `
  ${stocksData[1].displayName}
  ${stocksData[1].bookValue} 
   ${new Date().toLocaleString()}
  `;
};
