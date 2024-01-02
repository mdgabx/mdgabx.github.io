import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Configure Leaflet's default icon path
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const position:LatLngTuple = [9.8500, 124.1435] || undefined;

  return (
    <div className='h-[350px]'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
            <Popup>
                <p className='font-quicksand'>Tagbilaran City, Bohol, Philippines</p>
            </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
