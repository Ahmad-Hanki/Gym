import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = TextareaProps & {
  // Allow any other unspecified props
  type?: string
};

const Input = ({ type, ...props }: Props , {...inProps}:InputProps ) => {
  return (
    <>
      {type === 'textarea' ? (
        <textarea
          className="mt-5 placeholder:opacity-40 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
          rows={4}
          cols={50}
          {...props}
        />
      ) : (
        <input
          className="mt-5 placeholder:opacity-40 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
          {...inProps}
        />
      )}
    </>
  );
};

export default Input;
