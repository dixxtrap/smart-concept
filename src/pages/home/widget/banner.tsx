import { Banner } from "@/components/banner";
import { Assets } from "@/cores/asset";

export const HomeBanner = () => {
  return (
    <Banner imgUrl={Assets.banner1}>
      <div className="flex items-center mx-auto md:max-w-3xl justify-center h-full flex-col">
        <div className="max-w-md font-serif">
          <h4 className="text-5xl md:text-5xl text-white ">
            Construisons l’avenir<br/>,bâtissons <span className="  bg-clip-text font-bold text-transparent bg-gradient-to-tr from-amber-500 to-amber-700">vos maisons avec nous</span>
          </h4>
          <p className="text-white/90 ">
          Smart-Concept est une entreprise sénégalaise de construction implantée au cœur du Sénégal. Depuis notre création en 2010, nous mettons notre expertise au service de la réalisation d’habitations individuelles et de cités résidentielles, en alliant innovation technologique et traditions locales.
          </p>
        </div>
      </div>
    </Banner>
  );
};
