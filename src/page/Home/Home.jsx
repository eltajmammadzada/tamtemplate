import Navbar from "../../Layout/Navbar/Navbar";
import HeroImg from "../../assets/heroimg.svg";
import One from "../../assets/1.svg";
import Icon1 from "../../assets/icon1.svg";
import Icon2 from "../../assets/icon2.svg";
import Icon3 from "../../assets/icon3.svg";
import Two from "../../assets/2.svg";
import Icon4 from "../../assets/icon4.svg";
import Icon5 from "../../assets/icon5.svg";
import Icon6 from "../../assets/icon6.svg";
import Icon7 from "../../assets/icon7.svg";
import Icon8 from "../../assets/icon8.svg";
import Icon9 from "../../assets/icon9.svg";
import Three from "../../assets/3.svg";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function Home() {
  return (
    <>
      <section className="bg-herobg">
        <Navbar />
        <div className="container flex flex-col justify-center items-center pt-[60px]">
          <span className="text-white font-dm-sans font-medium text-lg uppercase tracking-[2px] pb-[26px]">
            vocibus facilis
          </span>
          <h2 className=" pb-[33px] lg:text-4xl md:text-3xl text-2xl font-bold font-dm-sans lg:leading-[80px] md:leading-[70px] leading-[60px] text-white max-w-[710px] min-w-[270px] text-center">
            Mentitum commune erroribus scripserit
          </h2>
          <button className="bg-Primary_2 text-[#2B2B2B] py-3 px-7 rounded-3xl font-dm-sans font-bold text-base">
            Submit
          </button>
          <img src={HeroImg} alt="ds" className=" translate-y-[100px]" />
        </div>
      </section>

      <section className="bg-[#FCF0E3] pt-[170px] pb-[103px]">
        <div className="container grid lg:grid-cols-12 md:grid-cols-12 items-center gap-6">
          <div className="lg:col-span-5 md:col-span-7">
            <span className=" text-Primary_1 font-dm-sans text-lg font-medium uppercase tracking-[2px] pb-6">
              Sale veritus
            </span>
            <h3 className="text-black lg:text-[3rem] text-2xl font-dm-sans font-bold lg:leading-[64px] md:leading-[55px] pb-7">
              Fabulas invenire partiendo
            </h3>
            <p className="pb-8 text-lg font-normal font-dm-sans text-black">
              Dicta omnes ius ut, ei atomorum voluptatum definitionem per. Zril
              petentium sit at, vel at quis corrumpit. At facilisi contentiones
              per.
            </p>
            <button className="bg-Primary_1 text-white py-3 px-6 rounded-3xl">
              Explore
            </button>
          </div>
          <div className="lg:col-span-7 md:col-span-5">
            <img src={One} alt="" />
          </div>
        </div>
      </section>

      <section className="container pt-[90px] pb-[120px]">
        <div className="text-center pb-[70px]">
          <span className="pb-6 text-Primary_1 font-dm-sans font-normal text-lg">
            Percipit eloquentiam
          </span>
          <h3 className="text-[#333] max-w-[460px] mx-auto font-dm-sans font-bold lg:text-3xl ld:leading-[64px] text-2xl leading-[55px]">
            Viderer detracto ocurreret
          </h3>
        </div>
        <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-4 gap-6">
          <div className="col-span-4 bg-[#EDF3FF] rounded-sm py-8 px-8">
            <img src={Icon1} alt="" className="pb-[58px]" />
            <h4 className="text-2xl leading-[48px] font-bold font-dm-sans text-[#333] pb-5">
              Mel everti
            </h4>
            <p className="text-base font-dm-sans font-normal text-Text_Black_50%">
              Ancillae intellegat mazim integre an nam. Pro te viderer ancillae
              scribentur.
            </p>
          </div>
          <div className="col-span-4 bg-[#FFF3D4] rounded-sm py-8 px-8">
            <img src={Icon2} alt="" className="pb-[58px]" />
            <h4 className="text-2xl leading-[48px] font-bold font-dm-sans text-[#333] pb-5">
              Temporibus
            </h4>
            <p className="text-base font-dm-sans font-normal text-Text_Black_50%">
              Ancillae intellegat mazim integre an nam. Pro te viderer ancillae
              scribentur.
            </p>
          </div>
          <div className="col-span-4 bg-[#D0F2E8] rounded-sm py-8 px-8">
            <img src={Icon3} alt="" className="pb-[58px]" />
            <h4 className="text-2xl leading-[48px] font-bold font-dm-sans text-[#333] pb-5">
              Porro assum
            </h4>
            <p className="text-base font-dm-sans font-normal text-Text_Black_50%">
              Ancillae intellegat mazim integre an nam. Pro te viderer ancillae
              scribentur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9D9EB] py-[100px]">
        <div className="container grid gap-6 lg:grid-cols-12">
          <div className="col-span-7 text-left">
            <img src={Two} alt="" />
            <h3>
              Noluisse similique te his. Sed consul vocent ex, has vero mandamus
              eu, ei eam alia recusabo vocibus.
            </h3>
          </div>
          <div className="col-span-5">
            <span className="text-lg font-dm-sans font-normal tracking-[2px] uppercase text-Primary_1">
              reprehendunt
            </span>
            <h3 className="pt-6 text-[#333] lg:text-3xl text-2xl font-dm-sans font-bold lg:leading-[64px] leading-[55px]">
              Quo luptatum evertitur
            </h3>
            <p className="pt-7 text-lg font-dm-sans font-normal text-[#333]">
              Altera integre suavitate per an, alienum phaedrum te sea. Ex sea
              causae dolores, nam et doming dicunt feugait. Ea mel scripta
              aperiri postulant.
            </p>
            <ul className="grid grid-cols-2 gap-8 pt-14 pb-5">
              <li className="flex items-center gap-3">
                <img src={Icon4} alt="" />
                <span>Lorem</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={Icon5} alt="" />
                <span>Lorem</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={Icon6} alt="" />
                <span>Lorem</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={Icon7} alt="" />
                <span>Lorem</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={Icon8} alt="" />
                <span>Lorem</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={Icon9} alt="" />
                <span>Lorem</span>
              </li>
            </ul>
            <button className="text-[#F36B7F] border-[#F36B7F] border-solid border py-3 px-7 rounded-3xl text-base font-dm-sans font-bold">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 container">
        <div className="gap-6 grid lg:grid-cols-2 grid-cols-1">
          <div>
            <span className="text-lg font-dm-sans font-normal uppercase text-Primary_1 tracking-[2px] pb-6">animal</span>
            <h3 className="pb-12 lg:text-3xl lg:leading-[64px] text-2xl leading-[55px] text-[#333] font-dm-sans font-bold">Quidam officiis similique </h3>
            <div className="bg-[#FFF3D4] rounded-lg">
              <img src={Three} alt="" className="w-full" />
              <div className="py-10 px-8">
                <h3 className="pb-2 text-xl font-dm-sans font-bold leading-8 text-[#333]">Efficiendi nihil</h3>
                <span className="text-base font-normal font-dm-sans text-Text_Black_50%">Exerci</span>
              </div>
            </div>

            <div className="grid grid-cols-6 pt-[70px]">
              <div className="col-span-5">
                <p className="pb-4 text-base font-dm-sans font-normal text-Text_Black_50%">
                  Dicat eripuit accumsan ad est. Facer facilisi ius ei, ea has
                  cetero argumentum, vel at fugit temporibus.
                </p>
                <p className="text-base font-dm-sans font-normal text-Text_Black_50%">
                  Deseruisse definitionem his et, an has veri integre
                  abhorreant, nam alii epicurei et. Ei ferri aperiri pri. Nemore
                  facilisi mediocrem at duo, zril ancillae ea sit.
                </p>
              </div>
            </div>
          </div>
          <div className="gap-6 flex flex-col">

          <div className="bg-[#EDF3FF] rounded-lg">
              <img src={Three} alt="" className="w-full" />
              <div className="py-10 px-8">
                <h3 className="pb-2 text-xl font-dm-sans font-bold leading-8 text-[#333]">Tollit indoctum</h3>
                <span className="text-base font-normal font-dm-sans text-Text_Black_50%">Contentiones</span>
              </div>
            </div>

            <div className="bg-[#D0F2E8] rounded-lg">
              <img src={Three} alt="" className="w-full" />
              <div className="py-10 px-8">
                <h3 className="pb-2 text-xl font-dm-sans font-bold leading-8 text-[#333]">Tantas platonem</h3>
                <span className="text-base font-normal font-dm-sans text-Text_Black_50%">Dissentiet</span>
              </div>
            </div>

          </div>
        </div>
        <div className="flex justify-center w-full pt-[64px]">
        <button className="border border-solid border-[#F36B7F] text-[#F36B7F] py-3 px-10 rounded-3xl font-dm-sans font-bold text-base">All work</button>
        </div>
      </section>

      <section className="py-[90px] bg-subscribebg">
        <div className="container grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
            <div>
                <h3 className="text-2xl leading-[48px] font-dm-sans font-bold text-white pb-1">Dolorem habemus</h3>
                <p  className="text-base font-dm-sans font-normal text-Text_White_50% pb-10">Mandamus et, eius ponderum at nec cum lorem.</p>
                <div className="flex gap-3 lg:flex-row md:flex-row flex-col">
                <input type="text" className="h-12 rounded-3xl min-w-[230px] lg:w-[270px] md:w-[260px] w-full pl-3" placeholder="Enter Email" />
                <div>
                <button className="bg-Primary_2 text-[#2B2B2B] py-3 px-7 rounded-3xl font-dm-sans font-bold text-base">
                Subscribe
          </button>
                </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl leading-[48px] font-dm-sans font-bold text-white pb-1">Definitiones</h3>
                <p className="text-base font-dm-sans font-normal text-Text_White_50% pb-10">Ut est fastidii iracundia at quo scripserit tantas.</p>
                <div className="flex gap-2">
                <TiSocialFacebookCircular className="w-12 h-12 text-white" />
                <TiSocialTwitterCircular className="w-12 h-12 text-white" />
                <TiSocialLinkedinCircular className="w-12 h-12 text-white" />
                </div>
            </div>
        </div>
      </section>

      <footer className="bg-footerbg py-11">
        <div className="container grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="flex lg:justify-start md:justify-start justify-center pb-2">
            <span className="text-base font-bold text-white font-dm-sans">© 2024. All Right Reserved. Created by EltajMammadzada.</span>
            </div>
            <div>
                <ul className="flex gap-8 lg:justify-end md:justify-end justify-center">
                    <li className="text-base font-bold text-white font-dm-sans">Convenire</li>
                    <li className="text-base font-bold text-white font-dm-sans">Graecis</li>
                    <li className="text-base font-bold text-white font-dm-sans">Bonorum</li>
                </ul>
            </div>
        </div>
      </footer>
    </>
  );
}
