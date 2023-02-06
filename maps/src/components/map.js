import { useEffect } from "react";
import styled from "styled-components";
const Map = () => {
  useEffect(() => {
    let container = document.getElementById("maps");
    let option = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 8,
    };
    let map = new window.kakao.maps.Map(container, option);

    //드래그 막기
    map.setDraggable(false);
    //줌 막기
    map.setZoomable(false);
  });
  return (
    <MapWapper className="map">
      <MapContainer className="mapcontainer" id="maps"></MapContainer>
    </MapWapper>
  );
};
export default Map;

const MapWapper = styled.div`
  width: 400px;
  height: 500px;
  background-color: grey;
`;
const MapContainer = styled.div`
  width: 400px;
  height: 500px;
  background-color: green;
`;
