import Image from "next/image";

export default function Hero() {
    return (
        <div>
            <div
                className="relative w-screen h-screen bg-cover bg-center"
                style={{ backgroundImage: 'url(https://res.cloudinary.com/dz72ifxnw/image/upload/v1727252521/pexels-rdne-7503257_dlwfaa.jpg)' }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
                
                <h1 className="relative text-white text-4xl   font-bold text-center pt-[20%]">
                    Хөгжимчид, дуучдын мэдээллийг эндээс ... 
                </h1>
            </div>
        </div>
    );
}
