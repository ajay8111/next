// components/Button.js
const Button = ({ children, onClick }) => (
    <button
      className="bg-custom-green text-white px-6  py-3  rounded-lg hover:bg-green-600 font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
  
  export default Button;
  