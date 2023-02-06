const CurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      let locPosition = new kakao.maps.LatLan(lat, lon);
      let message = '<div style="padding:5px">현위치</div>';

      dispalyMarker(locPosition, message);
    });
  } else {
    let locPosition = new kakao.maps.LatLng(37.4812845080678, 126.952713197762);
    let message = "현재위치를 알수없습니다";
    currentLatLon["lat"] = 33.450701;
    currentLatLon["lon"] = 126.570667;
    displayMarker(locPosition, message);
  }
  return true;
};
CurrentLocation();
