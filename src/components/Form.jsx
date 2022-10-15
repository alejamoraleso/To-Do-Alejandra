import { useState, useEffect } from "react";
import { AlertError } from "./AlertError";

const Form = ({ tareas, setTareas, tarea, setTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  // Actualizar en el formulario la información de un registro
  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setTitulo(tarea.titulo);
      setFecha(tarea.fecha);
      setDescripcion(tarea.descripcion);
    }
  }, [tarea]);

  // Generar clave para cada registro
  const generarId = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };

  // Envio del boton al formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([titulo, fecha, descripcion].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const objetoTareas = {
      titulo,
      fecha,
      descripcion,
    };

    if (tarea.id) {
      objetoTareas.id = tarea.id;
      setError(false);
      // Actualizar registros seleccionados
      const tareasModificadas = tareas.map((tareaState) =>
        tareaState.id === tarea.id ? objetoTareas : tareaState
      );

      setTareas(tareasModificadas);
      setTarea({});
    } else {
      objetoTareas.id = generarId();

      // Guarda los registros 1 a 1
      setTareas([...tareas, objetoTareas]);
    }

    // Limpia los inputs del formulario
    setTitulo("");
    setFecha("");
    setDescripcion("");
  };

   
  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-2xl text-center mb-4 bg-blue-700 text-white shadow-md px-6 py-2 rounded-lg mt-0">
          Creación de Tareas ✍
        </h2>

        <form
          className="bg-white shadow-lg rounded-lg py-6 px-5 mb-10"
          onSubmit={handleSubmit}
        >
          {error && (
            <AlertError>
              Se Deben completar todos los campos del formulario 📑
            </AlertError>
          )}

          <div className="mb-5">
            <label
              className="block text-gray-dark uppercase font-bold"
              htmlFor="titulo"
            >
              Titulo :
            </label>
            <input
              type="text"
              className="border-2 border-gray-dark w-full p-2 mt-2 rounded-md placeholder-gray"
              id="titulo"
              placeholder="Escriba aquí ..."
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-dark uppercase font-bold"
              htmlFor="fecha"
            >
              Fecha :
            </label>
            <input
              type="date"
              className="border-2 border-gray-dark w-full p-2 mt-2 rounded-md placeholder-gray"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-dark uppercase font-bold"
              htmlFor="descripcion"
            >
              Descripción :
            </label>
            <textarea
              className="border-2 border-gray-dark w-full p-2 mt-2 rounded-md placeholder-gray"
              id="descripcion"
              placeholder="Escriba aquí ..."
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>

          {tarea.id ? (
            <input
              type="submit"
              className="bg-blue-700 w-full p-3 text-white uppercase font-bold rounded-md hover:border-gray-dark transition-colors cursor-pointer text-sm"
              value="Modificar Tarea"
            />
          ) : (
            <input
              type="submit"
              className="bg-blue-700 w-full p-3 text-white uppercase font-bold rounded-md hover:border-gray-dark transition-colors cursor-pointer text-sm"
              value="Crear Tarea"
            />
          )}
        </form>
      </div>
    </>
  );
};

export default Form;