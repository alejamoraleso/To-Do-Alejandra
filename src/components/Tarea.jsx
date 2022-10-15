import { TaskResults } from "./TaskResults";

export const Tarea = ({ tareas, setTarea, eliminarTarea }) => {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 mx-5 mb-10">
        {tareas && tareas.length ? (
          <>
            <h2 className="font-black text-2xl text-center mb-4 bg-blue-700 text-white shadow-md px-6 py-2 rounded-lg mt-0">
             Lista de Tareas 📋
            </h2>

            {tareas.map((tarea) => {
              return (
                <TaskResults
                  key={tarea.id}
                  tarea={tarea}
                  setTarea={setTarea}
                  eliminarTarea={eliminarTarea}
                />
              );
            })}
          </>
        ) : (
          <>
            <h2 className="font-black text-2xl text-center mb-4 bg-blue-700 text-white shadow-md px-6 py-2 rounded-lg mt-0">
             Lista de Tareas 📋
            </h2>
            <div className="bg-white shadow-lg rounded-lg py-10 px-5">
              <h2 className="font-black text-4xl text-center text-opacity-80 mb-5 mt-6">
                ¡ <span className="text-blue-700">NO Tiene</span> Tareas
              </h2>

              <h2 className="font-black text-4xl text-center text-opacity-80 mb-5 mt-6">
                Pendientes !
              </h2>

              <br></br>

              <div className="text-center text-7xl"> 🤷</div>

              <div className="text-center text-xs text-blue-700 font-semibold mt-14">
                Mantenga sus tareas presentes y logre la mayor productividad<br></br>
                Inicie  ✏ diligenciando el formulario 
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};