const SketchButton = ({ children }) => {
  const handleClick = () => {
    alert("Coming Soon!");
  };
  return (
    <button
      className="px-4 py-2 rounded-md border border-black bg-white text-black text hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default SketchButton;
