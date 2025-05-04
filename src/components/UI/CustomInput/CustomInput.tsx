"use-client";
export function CustomInput({
  placeholder,
  label,
  onclick,
  leftIcon,
  leftIconClick,
  rightIcon,
  rightIconClick,
  value,
  onChange,
}: {
  placeholder: string;
  value: any;
  onclick: any;
  onChange: any;
  leftIcon?: any;
  rightIcon?: any;
  label?: string;
  leftIconClick?: any;
  rightIconClick?: any;
}) {
  return (
    <div>
      <div className="space-y-1 w-full max-w-xs">
        <label htmlFor="input" className="text-gray-700">
          {label}
        </label>
        <div className="relative flex gap-1 justify-between border rounded-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          {leftIcon && (
            <div
              // className="absolute left-1 top-1/2 transform -translate-y-1/2"
              onClick={leftIconClick}
            >
              {leftIcon}
            </div>
          )}
          {onclick ? (
            <div
              id="input"
              onClick={onclick}
              // className="border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {Array.isArray(value)
                ? `${value[0].toLocaleDateString(
                    "en-US"
                  )} - ${value[1].toLocaleDateString("en-US")}`
                : value.toLocaleDateString("en-US")}
            </div>
          ) : (
            <input
              id="input"
              type="text"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              // className="w-28 pl-9 pr-6 py-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
          {rightIcon && (
            <div
              // className="absolute right-1 top-1/2 transform -translate-y-1/2"
              onClick={rightIconClick}
            >
              {rightIcon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
