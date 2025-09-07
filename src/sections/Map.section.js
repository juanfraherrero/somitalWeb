import MapContainer from '@/components/MapContainer';
import locations from "@/data/locationsHome.json";

const ID_MAP = "mapa";

const MapSection = () => {
    return (
        <section
            id={ID_MAP}
            className="max-w-7xl mx-auto flex flex-wrap justify-center mt-16"
        >
            <div className="w-full px-6 ">
                <div className="text-center">
                    <h2 className="my-heading2 mb-4">
                        Mapa
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto mb-8 "></div>
                </div>
            </div>
            <MapContainer locations={locations} />
        </section>
    );
};

export default MapSection;
