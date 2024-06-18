import { FC, useEffect, useState } from "react";
import Photo from './Photo';

export interface IPhotoJson {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

const PhotoList: FC = () => {
    const [photos, setPhotos] = useState<IPhotoJson[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const placeholderDivImgStyle = {
        width: '150px',
        height: '150px',
        margin: '0 auto',
        backgroundColor: '#e0e0e0'
    };
    const placeholderTitleStyle = {
        width: '450px',
        height: '1.5em',
        backgroundColor: '#e0e0e0',
        margin: '20px 1px 8px 1px'
    }

    useEffect(() => {

        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const data: IPhotoJson[] = await response.json();
                setPhotos(data.slice(0, 10))
                setIsLoading(false); // Laden der Daten ist beendet

            } catch (error) {
                console.log(error);
                setIsLoading(false); // Laden der Daten ist beendet
            }
        }

        fetchPhotos();
    }, []);  // Пустой массив зависимостей, чтобы обеспечить однократный запуск при монтировании / das leere Abhängigkeitsarray, um einen einzigen Lauf beim Einhängen zu gewährleisten

    // return isLoading ? ( <></> ) : ( <></> );
    return isLoading ? (
        Array.from(new Array(10)).map((_, index) => (
            <div key={index} className="card" style={{ width: '580px', margin: '8px auto', backgroundColor: 'rgba(var(--bs-tertiary-bg-rgb)' }}>
                <div className="card-body d-flex flex-column align-items-center text-center">
                    <div style={placeholderDivImgStyle}>
                        <img style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div style={placeholderTitleStyle} />
                </div>
            </div>
        ))

    ) : (
        <div className='d-flex flex-column align-items-center text-center' >
            {photos.map((photo) => (
                <Photo
                    key={photo.id}
                    photo={photo}
                />
            ))}
        </div>
    )
}

export default PhotoList
