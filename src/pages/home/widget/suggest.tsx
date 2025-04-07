import { Assets } from "@/cores/asset";

const items = [
  {
    label: "Conception et Planification Personnalisée",
    comment:
      "Analyse du terrain et prise en compte des contraintes réglementaires et environnementales propres au Sénégal.",
    src: Assets.bat2,
  },
  {
    label: "Construction et Réalisation de Projets",
    comment:
      "Coordination des équipes sur le terrain avec une attention particulière aux techniques de construction adaptées au climat sénégalais.",
    src: Assets.group3,
  },
  {
    label: "Rénovation et Extension",
    comment:
      "Mise à jour des infrastructures existantes en conservant l’harmonie architecturale et en intégrant des améliorations techniques pertinentes pour le Sénégal.",
    src: Assets.personne2,
  },
];
export const HomeSuggest = () => {
  return (
    <div className="bg-green-50 w-screen py-10 outline outline-green-600">
    <div className="flex  max-w-4xl mx-auto font-serif flex-col items-center gap-y-5">
      <h2>Ce que nous proposons</h2>
      <h2 className="text-2xl font-bold  max-w-sm">
        Nous fournissons d’excellents services à nos clients
      </h2>
     
      <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
        {items.map((e) => (
          <div className="flex p-2 outline rounded-md bg-white  gap-1 flex-col" key={e.label}>
            <h4 className="text-xl font-medium ">{e.label}</h4>
            <p className="text-xs">{e.comment}</p>
            <div className="grow"></div>
            <div className="h-[300px] flex w-full outline rounded-md overflow-hidden">
            <img src={e.src} alt="" className="  object-cover w-full " />

            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
