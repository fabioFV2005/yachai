import example from "../../../assets/hero/example.jpg"
export const HomePage = () => {
    return (
        <section className="flex flex-col mt-14">
            <div className="grid grid-cols-2 items-center justify-between px-96 py-8 ">
                <div className="flex flex-col">
                    <p className="w-fit h-fit text-lg  text-white px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-lg mb-6">
                        {"< "} Empresa desarrolladora de software {" />"}
                    </p>

                    <h1 className="text-5xl text-white mb-8 w-fit h-fit font-bold">
                        Escale de forma
                        <br />

                        <span className="text-6xl text-gradient font-bold text-blue ">
                            más
                            inteligente
                        </span>
                        <br />
                        con talento
                        en ingeniería </h1>
                    <p className="text-lg text-white mb-8 w-fit h-fit">
                        Software basado en la confianza y colaboración. <br /> Transformamos ideas en soluciones digitales innovadoras.
                    </p>

                </div>

                <img className="w-xl rounded-3xl m-auto" src={example} alt="image team" />

            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAFAFA" fill-opacity="1" d="M0,192L40,197.3C80,203,160,213,240,192C320,171,400,117,480,128C560,139,640,213,720,234.7C800,256,880,224,960,208C1040,192,1120,192,1200,192C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>

        </section>
    )
}
