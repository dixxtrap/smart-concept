import { HomeAboutUs } from "./widget/about_us"
import { HomeBanner } from "./widget/banner"
import { HomeProcessus } from "./widget/processus"
import { HomeSuggest } from "./widget/suggest"

export const Home = () => {

    return <div className="flex  flex-col">
        <HomeBanner/>
        <div className="mx-auto py-4 md:py-10 gap-y-4 md:gap-y-10 flex flex-col">
        <HomeAboutUs/>
        <HomeProcessus/>
        <HomeSuggest/>
        </div>
        <div className="h-28"></div>
    </div>
  
}
