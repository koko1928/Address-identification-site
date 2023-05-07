// IPアドレスを取得するためのAPIのURL
const ipUrl = "https://api.ipify.org?format=json";

// IPアドレスから住所を取得するためのAPIのURL
const geoUrl = "https://freegeoip.app/json/";

// IPアドレスを取得する
$.getJSON(ipUrl, function(data) {
  const ipAddress = data.ip;
  // IPアドレスから住所を取得する
  $.getJSON(geoUrl + ipAddress, function(data) {
    const address = data.city + ", " + data.region_name + ", " + data.country_name;
    // 住所を表示する
    $("#address").text(address);
  });
});
