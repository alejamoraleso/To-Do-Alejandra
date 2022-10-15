export const AlertError = ({ children }) => {
  return (
    <>
      <div
        className="bg-blue-700 border border-red text-white px-4 py-3 mb-5 rounded relative"
        role="alert"
      >
        <strong className="font-bold text-sm decoration-solid decoration-purple">
          Todos los Campos son Obligatorios  :{" "}
        </strong>
        <br></br>
        <span className="block text-xs font-bold">{children}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3 text-1xl">
          🙄 🙄
        </span>
      </div>
    </>
  );
};