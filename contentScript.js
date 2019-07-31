function checkForVin() {
  const sidebar = document.getElementById('prod-final-deliver-desk-product-info');
  const article = document.createElement('article');
  const title = document.createElement('h5')
  const vin = document.createElement('p')
  title.className = 'tds-text--body_small_headline'
  title.innerText = "VIN"
  vin.className = 'tds-text--body_small'
  vin.innerText = "Checking"
  article.appendChild(title)
  article.appendChild(vin)
  sidebar.insertBefore(article, sidebar.firstChild);

  const CHECK_INTERVAL = 250;
  const TEN_SECOND_TIMEOUT = 10000;
  let checked = false;

  const vinCheckTimeout = setInterval(() => {
    if (Tesla) {
      checked = true
      vin.innerText = Tesla.ProductF.Data.Insurance.vin || 'None';
    } else {
      vin.innerText = vin.innerText + '.'
    }
  }, CHECK_INTERVAL);

  setTimeout(() => {
    clearInterval(vinCheckTimeout);
    if (!checked) {
      vin.innerText = 'None';
    }
  }, TEN_SECOND_TIMEOUT);
}

function embed(fn) {
  const script = document.createElement("script");
  script.text = `(${fn.toString()})();`;
  document.documentElement.appendChild(script);
}

embed(checkForVin);