const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="my-5">
      <label htmlFor={name}>{label}</label>
      <div className="flex mt-2 w-full items-center justify-center">
        <div className="cursor-pointer w-full rounded-lg bg-gradient-to-r from-gradient-from to-gradient-to focus-within:p-[1px]">
          <input
            {...rest}
            name={name}
            id={name}
            className={
              "w-full  border rounded-lg focus:outline-0 p-2 cursor-pointer " +
              (error
                ? "border-red focus:border-light-grayish-violet"
                : "border-light-grayish-violet")
            }
          />
        </div>
      </div>

      {error && <div className="text-red">{error}</div>}
    </div>
  );
};

export default Input;
