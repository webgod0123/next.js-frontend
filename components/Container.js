const Container = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1200px] m-auto px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
