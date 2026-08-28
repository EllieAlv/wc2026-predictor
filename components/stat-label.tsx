import { ReactNode } from "react";

interface LabelProp {
  children: ReactNode;
}

export default function StatLabel({
  children,
  ...props
}: LabelProp): React.JSX.Element {
  return (
    <label {...props} className="text-center shrink-0">
      {children}
    </label>
  );
}
