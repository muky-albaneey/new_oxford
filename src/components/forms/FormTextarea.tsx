import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/src/lib/utils";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id || `textarea-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="w-full">
        <label
          htmlFor={textareaId}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <textarea
          id={textareaId}
          ref={ref}
          rows={4}
          className={cn(
            "w-full rounded-md border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;

