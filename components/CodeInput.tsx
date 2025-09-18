
import React, { useState, useEffect, useRef } from 'react';
import { continentData, ContinentData } from '../constants';

// Since Leaflet is loaded from a CDN, we declare it to satisfy TypeScript
declare const L: any;

type Filter = 'all' | 'flora' | 'fauna';

const InfoCard: React.FC<{ data: ContinentData; filter: Filter }> = ({ data, filter }) => {
    return (
        <div className="p-4">
            <h3 className="text-2xl font-bold text-brand-green mb-4">{data.name}</h3>
            {(filter === 'all' || filter === 'flora') && (
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Flora Khas</h4>
                    <ul className="space-y-2">
                        {data.flora.map(item => (
                            <li key={item.name} className="flex items-center bg-green-50 p-2 rounded-md">
                                <span className="text-2xl mr-3">{item.icon}</span>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {(filter === 'all' || filter === 'fauna') && (
                <div>
                    <h4 className="text-lg font-semibold mb-2">Fauna Khas</h4>
                    <ul className="space-y-2">
                        {data.fauna.map(item => (
                            <li key={item.name} className="flex items-center bg-blue-100 p-2 rounded-md">
                                <span className="text-2xl mr-3">{item.icon}</span>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const MapView: React.FC = () => {
    const mapRef = useRef<any>(null);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [selectedContinent, setSelectedContinent] = useState<ContinentData | null>(continentData[0]);
    const [filter, setFilter] = useState<Filter>('all');

    useEffect(() => {
        if (mapContainerRef.current && !mapRef.current) {
            const map = L.map(mapContainerRef.current).setView([20, 30], 2);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            }).addTo(map);

            continentData.forEach(continent => {
                const icon = L.divIcon({
                    html: `<div class="text-4xl transition-transform duration-200 ease-in-out hover:scale-125 cursor-pointer">${continent.fauna[0].icon}</div>`,
                    className: '',
                    iconSize: [40, 40],
                    iconAnchor: [20, 20],
                });
                
                L.marker(continent.coords, { icon })
                    .addTo(map)
                    .on('click', () => {
                        setSelectedContinent(continent);
                        map.flyTo(continent.coords, continent.zoom, { animate: true, duration: 1 });
                    });
            });

            mapRef.current = map;
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-120px)]">
            <div className="md:w-3/4 h-full rounded-lg shadow-lg overflow-hidden">
                <div ref={mapContainerRef} className="w-full h-full" id="map"></div>
            </div>
            <div className="md:w-1/4 bg-white rounded-lg shadow-lg overflow-y-auto">
                <div className="p-4 border-b">
                    <h2 className="text-xl font-bold">Informasi Wilayah</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                         <button onClick={() => setFilter('all')} className={`px-3 py-1 text-sm rounded-full ${filter === 'all' ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>Keduanya</button>
                         <button onClick={() => setFilter('flora')} className={`px-3 py-1 text-sm rounded-full ${filter === 'flora' ? 'bg-brand-green text-white' : 'bg-gray-200'}`}>Flora</button>
                         <button onClick={() => setFilter('fauna')} className={`px-3 py-1 text-sm rounded-full ${filter === 'fauna' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}>Fauna</button>
                    </div>
                </div>
                {selectedContinent ? (
                    <InfoCard data={selectedContinent} filter={filter} />
                ) : (
                    <div className="p-4 text-center text-gray-500 h-full flex items-center justify-center">
                        <p>Klik ikon di peta untuk melihat detail.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MapView;
