import { FC } from "react";
import { IPhotoJson } from "./PhotoList";


const Photo: FC<{ photo: IPhotoJson }> = ({ photo }) => {
    //  const [newPhoto] = useState<{ title: string; thumbnailUrl: string }>({ title: photo.title, thumbnailUrl: photo.thumbnailUrl }); muss man nicht nochmal definieren, da es bereits in PhotoList vorhanden

    return (
        <div className="card" style={{ width: '580px', margin: '8px auto', backgroundColor: 'rgba(var(--bs-tertiary-bg-rgb)' }}>
            <div className="card-body d-flex flex-column align-items-center text-center">
                <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                />
                <h5 style={{ margin: '20px 1px 8px 1px' }} className='card-title'>{photo.title}</h5>
            </div>
        </div>
    );
}

export default Photo

