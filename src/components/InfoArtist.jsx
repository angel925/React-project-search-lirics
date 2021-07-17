
import React from 'react'


const InfoArtist = ({infoartist}) => {

    if(Object.keys(infoartist).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES } = infoartist;

    return ( 

        <div className="card border-light">
            <div className="card-header bg-primary text-ligth font-weight-bold">
                <h3>Información Artista</h3>
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />

                <p className="card-text text-white"> Genero: {strGenre}</p>

                <h2 className="card-text text-danger">Biografía</h2>

                <p className="card-text text-white">{strBiographyES}</p>

            </div>
        </div>

     );
}
 
export default InfoArtist;