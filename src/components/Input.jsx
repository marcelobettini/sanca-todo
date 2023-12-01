function Input({ onAdd }) {
  return (
    <form onSubmit={onAdd}>
      <label htmlFor="input"></label>
      <input type="text" id="input" name="input" />
      <input className="float-left" type="submit" value="Crear" />
      <input className="float-right button-outline" type="reset" value="Limpiar" />
    </form>
  );
}

export default Input;