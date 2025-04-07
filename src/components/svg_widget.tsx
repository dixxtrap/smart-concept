import { ISVG } from "@/cores/app_svg";

export const SvgWidget = ({
  className,
  content,
}: {
  className?: string;
  content: ISVG;
}) => {
  return (
    <svg
      className={className}
      viewBox={content.viewbox ?? "0 0 24 24"}
    
      xmlns="http://www.w3.org/2000/svg"
    >
      {content.paths.map((e) => e)}
    </svg>
  );
};
