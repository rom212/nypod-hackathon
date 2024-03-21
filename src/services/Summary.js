const defaultUrl = "https://nycgbbhackathon.azurewebsites.net/api/http_trigger";
const azureFunctionAppKey = process.env.REACT_APP_AZURE_FUNCTION_APP_KEY;

async function getTest() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  const targetUrl = "https://dummyjson.com/products";

  const response = await fetch(targetUrl, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const responseJson = await response.json();

  return responseJson;
}


async function getSummary(selectedItems, oss="no") {
  //may need to do clearn up on the and others
  const clients = selectedItems;
  const options = [
    {oss: oss === "yes" ? true : false}
  ];

  // prepping url
  let targetUrl = `${defaultUrl}`;

  // prepping header
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  // prepping body
  let body = { clients, options };

  // running fetch
  // creating abort controller
  const controller = new AbortController();
  const signal = controller.signal;
  try {
    const response = await fetch(targetUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      signal
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    // maybe error check here
    const responseJson = await response.json();
    return responseJson;

  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Fetch request was aborted');
    } else {
      console.log(error);
    }
    return [];
  }
}

export {
  getTest,
  getSummary
};