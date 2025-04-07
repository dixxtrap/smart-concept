import { SvgWidget } from "@/components/svg_widget";
import { AppSvg } from "@/cores/app_svg";
import { Assets } from "@/cores/asset";

const items = [
  {
    label: "Étude",
    icon: AppSvg.book,
    comment: "Analyse des besoins, faisabilité et conception du projet.",
  },
  {
    label: "Planification",
    icon: AppSvg.map,
    comment:
      "Élaboration des plans, organisation et préparation des ressources.",
  },
  {
    label: "Étude",
    icon: AppSvg.home,
    comment: "Construction, suivi et livraison du projet clé en main.",
  },
];
export const HomeProcessus = () => {
  return (
    <div className="max-w-4xl shadow  flex divide-x divide-accent divide-y-2 flex-col rounded-md outline overflow-hidden  mx-auto">
      <div className="grid divide grid-cols-1 md:grid-cols-2">
        <div className="h-52 content-center bg-green-100">
          <h2 className="text-xl m-auto font-bold">
            Découvrez notre<br></br>
            processus en 3 étapes
          </h2>
        </div>
        <div className=" h-full">
          <img src={Assets.bat3} alt="" className="object-cover h-full" />
        </div>
      </div>
      <div className="grid font-serif divide-x px-4 grid-cols-1 md:grid-cols-3">
        {items.map((e) => (
          <div className="flex flex-col  py-3 items-center ">
            <div className="bg-green-100 outline-green-500 size-12 p-1.5 rounded-full outline content-center  ">
            <SvgWidget className=" size-7 m-auto  self-center text-green-300 fill-green-600 " content={e.icon} />

            </div>
            <h4>{e.label}</h4>
            <p className="font-thin max-w-[180px] text-xs">{e.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
