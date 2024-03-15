const AnimatedText = () => {
  const text = "cannoncode"

  return (
    <div className="container-animation w-[90%] text-center">
      {
         text.split("").map((letter, index) => (
            <span
              key={index}
              className="letter-animation letter-fire"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {letter}
            </span>
          ))
        }
    </div>
  );
};

export default AnimatedText;
