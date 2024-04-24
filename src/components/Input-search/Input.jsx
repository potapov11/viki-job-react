import "./Input.css";

function Input() {
  return (
    <div className="input-box">
      <label>
        <input type="text" placeholder="Поиск..." />
        <span></span>
      </label>
    </div>
  );
}

export default Input;
