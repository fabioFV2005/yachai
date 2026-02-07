export const HomePage = () => {
    return (
        <section className="background-image-hero flex items-center justify-center">
            <div className="flex flex-row items-center justify-between px-16 py-8 gap-x-32">
                <div className="flex flex-col">

                    <p className="text-xl font-bold text-white mb-4">Yachai</p>

                    <h1 className="text-5xl text-white mb-8">
                        Escale de forma más inteligente con talento en ingeniería de software basado en la confianza</h1>
                </div>

                <img className="w-max" src="https://images.ctfassets.net/pupx38p1xfcl/365YGSIY4pFvPfIkLftmOy/21c622e61015fcb1db333287afe2bb72/-hero-home.webp" alt="image team" />
            </div>
        </section>
    )
}
