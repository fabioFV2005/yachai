import example from "../../../assets/hero/example.jpg"
// podremos implementar futuras props para hacer el componente más dinámico
export const Hero = () => {
    return (
        <section className="background-image-hero flex flex-col relative pt-20">
            <div className="grid grid-cols-2 items-center justify-between px-96 py-8 gap-9 ">
                <div className="flex flex-col">
                    <p className="w-fit h-fit text-lg text-white px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-lg mb-6">
                        {"< "} Desarrollo de Software {" />"}
                    </p>

                    <h1 className="text-5xl text-white mb-8 w-fit h-fit font-bold leading-tight">
                        Escale su negocio de forma
                        <br />
                        <span className="text-6xl font-extrabold text-blue">
                            más inteligente
                        </span>
                        <br />
                        con talento en ingeniería de software
                    </h1>

                    <p className="text-xl text-white/90 mb-8 w-fit h-fit max-w-xl leading-relaxed">
                        Transformamos sus ideas en soluciones digitales innovadoras.
                        Desarrollo basado en confianza, colaboración y excelencia técnica.
                    </p>

                </div>

                <img className="w-xl rounded-3xl m-auto" src={example} alt="image team" />

            </div>
            <div className="absolute bottom-0 left-0 right-0 -mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full block"><path fill="#FAFAFA" fillOpacity="1" d="M0,192L40,197.3C80,203,160,213,240,192C320,171,400,117,480,128C560,139,640,213,720,234.7C800,256,880,224,960,208C1040,192,1120,192,1200,192C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>

        </section>
    )
}
