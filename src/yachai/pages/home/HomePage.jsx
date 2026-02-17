import { Hero } from "../../../shared/components/home/Hero"
import { Card } from "../../../shared/components/cards/Card"
import confundida from "../../../assets/problems/confundida.avif"
import manual from "../../../assets/problems/manual.avif"
import negocios from "../../../assets/problems/negocios.webp"

export const HomePage = () => {
    const problems = [
        {
            image: manual,
            title: "Procesos lentos y manuales",
            description: "Las tareas repetitivas consumen tiempo valioso que podría dedicarse a crecer el negocio."
        },
        {
            image: negocios,
            title: "Falta de accesibilidad tecnológica",
            description: "Herramientas complejas que dificultan la adopción y el uso efectivo de la tecnología."
        },
        {
            image: confundida,
            title: "Soluciones poco intuitivas",
            description: "Sistemas difíciles de entender que generan frustración y baja productividad."
        }
    ]

    return (
        <>
            <Hero />
            <section className="background-white px-8 min-h-screen">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-blue-petroleum mb-6">
                            ¿Qué problema resolvemos?
                        </h2>
                        <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
                            Identificamos los desafíos más comunes en la transformación digital y ofrecemos soluciones simples, rápidas y accesibles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {problems.map((problem, index) => (
                            <Card
                                key={index}
                                image={problem.image}
                                title={problem.title}
                                description={problem.description}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="inline-block px-8 py-2  rounded-full">
                            <p className="text-soft-blue text-xl font-semibold ">
                                Nosotros lo hacemos simple, rápido y accesible
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
