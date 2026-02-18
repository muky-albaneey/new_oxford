import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/src/lib/utils";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, className, id, options, ...props }, ref) => {
    const selectId = id || `select-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="w-full">
        <label
          htmlFor={selectId}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <select
          id={selectId}
          ref={ref}
          className={cn(
            "w-full rounded-md border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20",
            error && "border-red-500",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";

export default FormSelect;

