
import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Form from "./components/Form";
import { Header } from "./components/Header";
import { Tarea } from "./components/Tarea";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  // Leer la información del LocalStorage de cada Registro
  useEffect(() => {
    const obtenerTareasLocalStorage = () => {
      const tareasLocalStorage =
        JSON.parse(localStorage.getItem('task')) ?? [];
      setTareas(tareasLocalStorage);
    };

    obtenerTareasLocalStorage();
  }, []);

  // Almacenando en LocalStorage los Datos del Formulario
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tareas));
  }, [tareas]);

  // Función para eliminar las tareas por el ID
  const eliminarTarea = (id) => {
    const actualizarTarea = tareas.filter((tarea) => tarea.id !== id);
    setTareas(actualizarTarea);
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <Header />
        <div className="mt-8 md:flex">
          <Form
            tarea={tarea}
            tareas={tareas}
            setTareas={setTareas}
            setTarea={setTarea}
          />
          <Tarea
            tareas={tareas}
            setTarea={setTarea}
            eliminarTarea={eliminarTarea}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
