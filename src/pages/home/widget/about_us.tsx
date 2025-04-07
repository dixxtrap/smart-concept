import { Assets } from "@/cores/asset";
const items=[{
    label:'Bienvenue chez Smart-Concept',
    comment :`Smart-Concept est une entreprise sénégalaise de construction
            implantée au cœur du Sénégal. Depuis notre création en 2010, nous
            mettons notre expertise au service de la réalisation d’habitations
            individuelles et de cités résidentielles, en alliant innovation
            technologique et traditions locales.`
},
{
    label:'Notre Histoire et Nos Racines',
    comment :`Née d’une volonté de répondre aux besoins croissants en logements
            modernes et adaptés au climat et à la culture sénégalaise,
            Smart-Concept a toujours valorisé le patrimoine local. Notre
            histoire est jalonnée de collaborations avec des artisans et des
            experts du territoire, qui nous permettent de conjuguer techniques
            de pointe et savoir-faire traditionnel. img`
}]
export const HomeAboutUs = () => {
  return (
    <div className="flex font-serif gap-3 mx-auto text-left max-w-6xl">
      <div className="flex  gap-3 flex-col max-w-lg items-start ">
        <h2 className="text-2xl font-bold">Qui Sommes-Nous</h2>
      
       {items.map(e=> <div key={e.label}  className="flex flex-col ">
          <h4 className="text-xl  font-medium">{e.label}</h4>
          <p>
            {e.comment}
          </p> 
        </div>)}
      </div>
      <div className="min-size-[400px]">
        <img src={Assets.crane} className="size-full object-contain" alt="" />
      </div>
    </div>
  );
};
