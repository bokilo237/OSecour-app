import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

// Correction des icônes Leaflet
const DefaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const DoctorIcon = L.icon({
  iconUrl: 'https://img.icons8.com/color/48/doctor-male.png',
  iconSize: [40, 40],
});

const NurseIcon = L.icon({
  iconUrl: 'https://img.icons8.com/color/48/nurse-female.png',
  iconSize: [40, 40],
});

const SpecialistIcon = L.icon({
  iconUrl: 'https://img.icons8.com/color/48/heart-with-pulse.png',
  iconSize: [40, 40],
});

// Positions fictives pour Douala (4.0511° N, 9.7679° E) et Yaoundé (3.8480° N, 11.5021° E)
const agents = [
  // Yaoundé
  { name: "Dr. Ngo Marie", type: "doctor", position: [3.8480, 11.5021], specialty: "Médecin généraliste" },
  { name: "Inf. Kouam Jean", type: "nurse", position: [3.855, 11.510], specialty: "Infirmier urgentiste" },
  { name: "Dr. Mbarga Paul", type: "specialist", position: [3.842, 11.495], specialty: "Cardiologue" },
  { name: "Inf. Ndzie Alice", type: "nurse", position: [3.860, 11.505], specialty: "Infirmière pédiatrique" },
  { name: "Dr. Owona Marc", type: "doctor", position: [3.835, 11.515], specialty: "Chirurgien" },

  // Douala
  { name: "Dr. Fotso Daniel", type: "doctor", position: [4.0511, 9.7679], specialty: "Médecin urgentiste" },
  { name: "Inf. Tchouapi Laura", type: "nurse", position: [4.045, 9.775], specialty: "Infirmière générale" },
  { name: "Dr. Ngando Albert", type: "specialist", position: [4.060, 9.755], specialty: "Pédiatre" },
  { name: "Inf. Mbappe Roger", type: "nurse", position: [4.055, 9.765], specialty: "Infirmier bloc opératoire" },
  { name: "Dr. Nkoulou Élise", type: "specialist", position: [4.040, 9.780], specialty: "Dermatologue" }
];

function MapController({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

export default function HealthMap() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          setLoading(false);
        },
        (err) => {
          setError(err.message);
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );
    } else {
      setError('La géolocalisation nest pas supportée par votre navigateur');
      setLoading(false);
    }
  }, []);

  if (loading) return <div className="p-4 text-blue-600">Recherche de votre position...</div>;
  if (error) return <div className="p-4 text-red-600">Erreur : {error}</div>;
  if (!position) return <div className="p-4 text-red-600">Position non disponible</div>;

  return (
    <div className="w-full">
      {/* Légende */}
      <div className="legend mb-4 p-4 bg-white rounded-lg shadow-md border flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <img 
            src={DefaultIcon.options.iconUrl} 
            alt="Votre position" 
            className="w-6 h-6 object-contain"
          />
          <span className="text-sm">Votre position</span>
        </div>
        
        <div className="flex items-center gap-2">
          <img 
            src={DoctorIcon.options.iconUrl} 
            alt="Médecin" 
            className="w-6 h-6 object-contain"
          />
          <span className="text-sm">Médecin</span>
        </div>

        <div className="flex items-center gap-2">
          <img 
            src={NurseIcon.options.iconUrl} 
            alt="Infirmier" 
            className="w-6 h-6 object-contain"
          />
          <span className="text-sm">Infirmier</span>
        </div>

        <div className="flex items-center gap-2">
          <img 
            src={SpecialistIcon.options.iconUrl} 
            alt="Spécialiste" 
            className="w-6 h-6 object-contain"
          />
          <span className="text-sm">Spécialiste</span>
        </div>
      </div>
      <div className="h-[600px] w-full rounded-lg shadow-lg border">
        <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={true}
          className="h-full w-full rounded-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position} icon={DefaultIcon}>
            <Popup className="font-bold text-blue-600">
              Vous êtes ici !
            </Popup>
          </Marker>

          {agents.map((agent, index) => (
            <Marker
              key={index}
              position={agent.position as [number, number]}
              icon={
                agent.type === 'doctor' ? DoctorIcon :
                agent.type === 'nurse' ? NurseIcon : SpecialistIcon
              }
            >
              <Popup>
                <div className="min-w-[200px]">
                  <h3 className="font-bold text-lg text-blue-600">{agent.name}</h3>
                  <p className="text-gray-700">{agent.specialty}</p>
                  <p className="text-sm mt-2">
                    {agent.position[0] > 4 ? 'Douala' : 'Yaoundé'}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}

          <MapController center={position} />
        </MapContainer>
      </div>
    </div>
  );
}