'use client';

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useRouter } from 'next/navigation';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface Props {
  center: [number, number];
  markers: { lat: number; lng: number; label: string }[];
  zoom?: number;
  style?: React.CSSProperties;
}

export default function Map({ center, markers, zoom = 13, style }: Props) {
  const router = useRouter();

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={style ?? { width: '100%', height: '400px', borderRadius: '1rem' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {markers.map((m, idx) => (
        <Marker
          key={idx}
          position={[m.lat, m.lng]}
          eventHandlers={{
            click: () => router.push(`/device/${m.label}`),
          }}
        >
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
            {m.label}
          </Tooltip>
          <Popup>{m.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
