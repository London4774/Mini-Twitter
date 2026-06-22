const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;