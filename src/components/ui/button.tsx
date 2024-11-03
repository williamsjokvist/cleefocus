export function Button(props: React.PropsWithChildren<{
  className?: string
} & React.ButtonHTMLAttributes<any>>) {
  const { children, className, ...rest } = props
  return (
    <button
      type="button"
      className={"shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] hover:bg-blue-400 hover:text-white text-[#696969] rounded-3xl font-light transition duration-200 ease-linear " + (className ?? "")}
      {...rest}
    >
      {children}
    </button>
  );
}
