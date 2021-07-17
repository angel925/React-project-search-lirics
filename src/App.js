import React, { useState, Fragment, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cancion from "./components/Cancion";
import InfoArtist from "./components/InfoArtist";

// const url= https://api.lyrics.ovh/v1/${artista}/${cancion};
// const url2= https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista};

function App() {
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [infoartist, guardarInfoArtist] = useState({});

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;

      const URL = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const URL2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([axios(URL), axios(URL2)]);

      //guardarLetra(resultado.data.lyrics);

      

      guardarLetra(letra.data.lyrics)
      guardarInfoArtist(informacion.data.artists[0])

    };

    consultarApiLetra();
  }, [busquedaletra,infoartist ]);
  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {/* Nunca nombrar los props como el componente principal */}
            <InfoArtist
            infoartist = {infoartist}
            />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
