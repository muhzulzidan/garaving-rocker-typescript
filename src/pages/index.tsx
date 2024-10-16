import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "@/components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "@/components/ui/button"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="font-bigcity">
        <section className="relative ">
          <StaticImage src={"../images/img-hero.png"} alt="Hero" className="w-full h-full absolute inset-0 z-0" />
          <div className="z-10 relative container mx-auto p-4 max-w-screen-lg flex flex-col justify-center py-32 pt-[12rem] gap-4">
            <h2 className="text-5xl text-[6rem] md:w-1/2 font-extrabold text-white">
              Lancia la tua impresa in Romagna
            </h2>
            <p className="text-2xl text-white md:w-1/2">Musica d&apos;impresa: un intero territorio al tuo sostegno</p>
            <Button className="bg-[#ea5b74] text-white px-24 py-6 w-fit">
              CANDIDATI ORA
            </Button>
          </div>
        </section>
        <section className="bg-white">
          <div className="z-10 relative container mx-auto p-4 max-w-screen-lg grid grid-cols-4 justify-center py-12 gap-20">
            <StaticImage src={"../images/logo-cesenalab.png"} alt="Hero" className="w-fit h-auto object-contain " objectFit="contain" />
            <StaticImage src={"../images/logo-fondazioneflaminia.png"} alt="Hero" className="w-fit h-auto object-contain " objectFit="contain" />
            <StaticImage src={"../images/logo-bancamonte.png"} alt="Hero" className="w-fit h-auto object-contain " objectFit="contain" />
            <StaticImage src={"../images/logo-comuneravenna.png"} alt="Hero" className="w-fit h-auto object-contain " objectFit="contain" />
          </div>
        </section>

        <section className="relative bg-gradient-to-r from-[#e5e5e5] to-[#e5e5e5]">
          <StaticImage src={"../images/img1.png"} alt="Hero" className="w-full h-full absolute inset-0 z-10 object-right-top" objectFit="contain" objectPosition={"right bottom"} />
          {/* <StaticImage src={"../images/img1.png"} alt="Hero" className="w-full h-full absolute inset-0 z-0 object-right-top" objectFit="cover" /> */}
          <div className="relative z-20 container mx-auto p-4 max-w-screen-lg py-12 pb-24 flex-col flex gap-4">
            <h3 className="gradient-text font-extrabold text-5xl text-[6rem] w-fit">Call aperta!</h3>
            <h4 className="text-5xl text-white font-bold">
              ROckER seleziona:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12 pb-16 md:w-9/12">
              <div className="rounded-xl backdrop-blur-lg border border-white bg-white/50 p-4 px-12 py-8 pt-20 relative flex flex-col gap-4 justify-center">
                <div className="p-4 rounded-full bg-white absolute inset-0 z-10 flex items-center justify-center w-20 h-20 -top-8 left-1/2 -translate-x-1/2">
                  <StaticImage
                    src="../images/icon-incubazione.png"
                    alt="Hero"
                    className="w-full h-full"
                  />
                </div>
                <h5 className="font-bold text-2xl text-[#64bcdd]">
                  Percorso <br />
                  incubazione 12 mesi
                </h5>
                <p>7 progetti early stage</p>
                <Button className="bg-[#64bcdd] text-white px-12 py-6 w-fit">
                  SCOPRI DI PIÙ
                </Button>
              </div>
              <div className="rounded-xl backdrop-blur-lg border border-white bg-white/50 p-4 px-12 py-8 pt-20 relative flex flex-col gap-4 justify-center">
                <div className="p-4 rounded-full bg-white absolute inset-0 z-10 flex items-center justify-center w-20 h-20 -top-8 left-1/2 -translate-x-1/2">
                  <StaticImage
                    src="../images/icon-incubazione.png"
                    alt="Hero"
                    className="w-full h-full"
                  />
                </div>
                <h5 className="font-bold text-2xl text-[#2c6ad6]">Percorso <br /> accelerazione 9 mesi </h5>
                <p>7 startup già costituite</p>
                <Button className="bg-[#2c6ad6] text-white px-24 py-6 w-fit">
                  SCOPRI DI PIÙ
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-5xl">Cosa offriamo?</h3>
              <div className="flex flex-col gap-2 md:w-1/3 py-6">
                <p>Oltre al programma di formazione e mentoring dedicato e personalizzato sono previsti:</p>
                <p className="font-bold">4 grant da 5 mila euro ciascuno per le startup indicate dalla giuria finale</p>
              </div>
              <div className="background-white-gradient rounded-2xl  backdrop-blur-lg p-6 md:w-1/2 mb-6">
                <h3 className="text-3xl font-bold">
                  Candida il tuo progetto entro il 10 novembre 2024
                </h3>
              </div>
              <Button className="bg-[#2c6ad6] text-white px-24 py-6 w-fit">
                CANDIDATI ORA
              </Button>
            </div>
          </div>
        </section>


        <section className="relative">
          <StaticImage src={"../images/img2.png"} alt="Hero" className="w-full h-full absolute inset-0 z-10 " />
          <div className="relative z-20 container mx-auto p-4 max-w-screen-lg py-14 pb-32 flex-col flex gap-8 text-white text-xl ">
            <h3 className="text-5xl text-[6rem] font-extrabold md:w-1/2">Scarica <br /> il bando e vola!</h3>
            <div className="flex gap-1 items-center">
              <StaticImage src={"../images/check.svg"} alt="Hero" className=" z-10 w-12 h-12" />
              <p>Apertura delle candidature: <strong>1 ottobre 2024</strong></p>

            </div>
            <div className="flex gap-1 items-center">
              <StaticImage src={"../images/check.svg"} alt="Hero" className=" z-10 w-12 h-12" />
              <p>Chiusura candidature: <strong>10 novembre 2024</strong>
              </p>
            </div>
            <div className="flex flex-col gap-4 md:w-3/12 font-bold">
              <Button className="bg-white text-[#2c6ad6] rounded-xl px-24 py-6 w-full font-bold">
                SCARICA IL BANDO
              </Button>
              <Button className="bg-[#ea5b74] rounded-xl text-white px-24 py-6 w-full font-bold">
                CANDIDATI ORA
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-[#ea5b74] py-24  text-white">
          <div className="container max-w-screen-lg mx-auto flex flex-col gap-8 text-3xl leading-10">
            <h3 className="text-5xl text-[6rem] font-extrabold">Programma</h3>
            <div className="flex flex-col gap-6 leading-10 md:w-2/3">
              <h4 className="font-bold">Le startup selezionate intraprendono un percorso sfidante della durata di xxx mesi:</h4>
              <p className="font-light text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-black ">Qui si potrebbero mettere i mentor o chi si occuperà di seguire le startup</p>
          </div>
          </div>
        </section>

        <section className="bg-[#e5e5e5] ">
          <div className="z-10 relative container mx-auto p-4 max-w-screen-lg flex flex-col py-12 pt-20 gap-4">
            <h3 className="text-5xl text-[6rem] text-white font-extrabold">Chi siamo</h3>
            <h4 className="text-3xl font-bold">Partner</h4>
            <div className="z-10 relative container mx-auto p-4 max-w-screen-lg grid grid-cols-4 justify-center py-12 pb-6 gap-6">
              <div className="p-4 bg-white rounded-2xl flex justify-center items-center">
                <StaticImage src={"../images/logo-cesenalab.png"} alt="Hero" className="w-full h-full object-contain " objectFit="contain" />
              </div>
              <div className="p-4 bg-white rounded-2xl flex justify-center items-center">
                <StaticImage src={"../images/logo-fondazioneflaminia.png"} alt="Hero" className="w-full h-full object-contain " objectFit="contain" />
              </div>
              <div className="p-4 bg-white rounded-2xl flex justify-center items-center">
                <StaticImage src={"../images/logo-bancamonte.png"} alt="Hero" className="w-full h-full object-contain " objectFit="contain" />
              </div>
              <div className="p-4 bg-white rounded-2xl flex justify-center items-center">
                <StaticImage src={"../images/logo-comuneravenna.png"} alt="Hero" className="w-full h-full object-contain " objectFit="contain" />
              </div>
            </div>
            <p>Con il supporto di <strong>Regione ER</strong> all&apos;interno del programma <strong>PORFESR</strong></p>

            <div className="z-10 relative container mx-auto p-4 max-w-screen-lg grid grid-cols-5 justify-center py-4 pb-0 gap-20">
              <StaticImage src={"../images/logo-regioneER.png"} alt="Hero" className="w-fit h-auto col-start-2 col-span-2 object-contain " objectFit="contain" />
              <StaticImage src={"../images/logo-PCER.png"} alt="Hero" className="w-fit h-auto object-contain " objectFit="contain" />
            </div>
          </div>
        </section>

        <section className="relative">
          <StaticImage src={"../images/img3.png"} alt="Hero" className="w-full h-full absolute inset-0 z-10 " />
          <div className="relative z-20 container mx-auto p-4 max-w-screen-lg py-14 pb-24 pt-[30rem] flex-col flex gap-8 text-white text-xl items-baseline">
            <h4 className="text-3xl ">Non perdere questa occasione</h4>
            <h3 className="text-5xl text-[6rem] font-extrabold">Il tuo Futuro parte dalla Romagna</h3>
            <Button className="bg-[#ea5b74] text-white px-24 py-6 w-fit">
              CANDIDATI ORA
            </Button>
          </div>
        </section>
        <section className="relative bg-[#316ad6]">
          <div className="relative z-20 container mx-auto p-4 max-w-screen-lg py-24  flex-col flex gap-8 text-white text-2xl items-baseline">
            <h4 >
              Form e/o contatti
            </h4>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
