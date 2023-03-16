function getBrowserName(userAgent) {

    if (userAgent.includes("Firefox")) {

      return "Mozilla Firefox";
    } else if (userAgent.includes("SamsungBrowser")) {
      return "Samsung Internet";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {

      return "Opera";
    } else if (userAgent.includes("Edge")) {
      return "Microsoft Edge (Legacy)";
    } else if (userAgent.includes("Edg")) {
      return "Microsoft Edge (Chromium)";
    } else if (userAgent.includes("Chrome")) {
      return "Google Chrome or Chromium";
    } else if (userAgent.includes("Safari")) {
      return "Apple Safari";
    } else {
      return "unknown";
    }
  }

const browserName = getBrowserName(navigator.userAgent);

if(browserName == 'Microsoft Edge (Chromium)' || browserName == 'Google Chrome or Chromium' || browserName == 'Apple Safari'){

} else {
    alert('Seu Browser pode não suporta o reconhecimento de voz, o que impossibilitará o jogo. Sugerimos usar navegadores com base em chromium')
}