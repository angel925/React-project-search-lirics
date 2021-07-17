import React, { useState } from "react";

const Formulario = ({guardarBusquedaLetra}) => {
  const [busqueda, guardarBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  const [error, guardarError] = useState(false);
  const { artista, cancion } = busqueda;

  //funcion actualizar state
  const actualizarState = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // consultar informacio por medio de las apis
  const buscarInformacion = (e) => {
    e.preventDefault();

    if (artista.trim() === "" || cancion.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    // pasar al componente principal si todo esta bien

    guardarBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={buscarInformacion}
            className="col card text-white m-5 mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Buscador de Lyrics</legend>
              {error ? (
                <p className="alert alert-danger text-center p-2 m-3">
                  ¡Vaya, vaya! al parecer todos lo camos son requeridos
                </p>
              ) : null}
              <div className="row m-2">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="text-dark">Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre de Artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="text-dark">Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre de la Canción"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="seacrh btn btn-primary float-right mb-4 mr-4"
              >
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
