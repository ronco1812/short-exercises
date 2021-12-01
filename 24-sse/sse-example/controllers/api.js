const axios = require("axios");

// axios fetch template
const options = {
  method: "GET",
  url: "https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/quote",
  params: { symbols: "AAPL,TSLA" },
  headers: {
    "x-rapidapi-host": "stock-data-yahoo-finance-alternative.p.rapidapi.com",
    "x-rapidapi-key": "2344edccb4mshebffe4d301a8b43p1da7a1jsn88821744a201",
  },
};

exports.fetchStocks = async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    // Connection: "keep-alive",
  });

  setInterval(async () => {
    const stockInfo = await fetchData();
    console.log(stockInfo);
    let data = JSON.stringify(stockInfo);
    res.write(`data: ${data}`);
  }, 3000);
};

const fetchData = async () => {
  try {
    const data = await axios.request(options);
    return data.data.quoteResponse.result;
  } catch (error) {
    return error;
  }
};
