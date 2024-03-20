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


async function getSummary(selectedItems=[], oss=false) {

 
  //prepping body
  //may need to do clearn up on the and others
  const clients = [...selectedItems];
  const options = [
    {oss: oss === "yes" ? true : false}
  ];

  // prepping url
  const tempCode = "thisistestcode";
  let targetUrl = `${defaultUrl}?code=${tempCode}`;


  // remove after the testing is done
  targetUrl = `https://jhl-test-functionapp.azurewebsites.net/api/testFunc?code=${azureFunctionAppKey}`;

  
  // prepping header
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  // prepping body
  let body = { clients, options };
  // running fetch
  const response = await fetch(targetUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // maybe error check here
  const responseJson = await response.json();


  return responseJson;
}

export {
  getTest,
  getSummary
};