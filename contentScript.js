function checkForVin() {
  const sidebar = document.getElementById('prod-final-deliver-desk-product-info');
  const article = document.createElement('article');
  const title = document.createElement('h5')
  const vin = document.createElement('p')
  const warning = document.createElement('p');
  warning.innerText = "The presence/absence of a provisional VIN doesn't necessarily mean anything.";
  warning.style.fontSize = "0.8em";
  title.className = 'tds-text--body_small_headline';
  title.innerText = "Provisional VIN";
  vin.className = 'tds-text--body_small';
  vin.innerText = "Checking";
  article.appendChild(title);
  article.appendChild(vin);
  article.appendChild(warning);
  sidebar.insertBefore(article, sidebar.firstChild);

  const CHECK_INTERVAL = 250;
  const TEN_SECOND_TIMEOUT = 10000;
  let checked = false;

  const vinCheckTimeout = setInterval(() => {
    if (typeof Tesla !== 'undefined') {
      checked = true
      vin.innerText = Tesla.ProductF.Data.Insurance.vin || 'None';
      clearInterval(vinCheckTimeout);
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
