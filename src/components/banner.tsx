import { ReactNode } from "react";

export const Banner = ({
  imgUrl,
  children,
}: {
  imgUrl: string;
  children?: ReactNode;
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})` , }}
      className="h-[500px] bg-cover   p-0 m-0   bg-no-repeat  w-screen "
    >
      <div className="bg-linear-70 h-[500px] place-content-center content-center from-black/90 to-black/50  w-full">
        {children}
      </div>
    </div>
  );
};
