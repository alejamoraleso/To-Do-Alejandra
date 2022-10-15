export const TaskResults = ({ tarea, setTarea, eliminarTarea }) => {
  const { titulo, fecha, descripcion, id } = tarea;

  // Eliminar tarea
  const handleEliminar = () => {
    const confirmar = confirm("🤔 Desea Eliminar La Tarea Seleccionada ? ");

    if (confirmar) {
      eliminarTarea(id);
    }
  };

  return (
    <>
      <div className="container">
        <div className="bg-white shadow-md px-6 py-5 rounded-lg mt-5">
          <div className="">
            <p className="font-bold mb-2 text-gray-dark uppercase">
              Titulo : <span className="font-normal normal-case">{titulo}</span>
            </p>
            <p className="font-bold mb-2 text-gray-dark uppercase">
              Fecha : <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-2 text-gray-dark uppercase">
              Descripción : {" "}
              <span className="font-normal normal-case text-justify">{descripcion}</span>
            </p>
            <p className="border-t-gray-light border-dashed border-t-2 mb-3 mt-5"></p>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-purple-700 text-white mt-3 py-2 px-10 rounded-md font-bold text-xs uppercase"
              onClick={() => setTarea(tarea)}
            >
              Actualizar
            </button>
            <button
              type="button"
              className="bg-red-700 text-white mt-3 py-2 px-10 rounded-md font-bold text-xs uppercase"
              onClick={handleEliminar}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};