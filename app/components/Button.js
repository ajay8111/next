// components/Button.js
const Button = ({ children, onClick }) => (
    <button
      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
  
  export default Button;
  