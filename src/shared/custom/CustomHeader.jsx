import Logo from "../../assets/logo/yachai_logo.png";
export const CustomHeader = () => {
    return (
        <header className="grid grid-cols-3 items-center justify-between px-16 py-4">
            <h1 className="font-bold text-white text-2xl flex items-center gap-x-2">
                YACHAI
            </h1>
            <ul className="flex items-center justify-center flex-row gap-8 font-semibold  ">
                <li>
                    <a className="font-semibold custom-link custom-link__visited" href="">Inicio</a>
                </li>
                <li>
                    <a className="font-semibold custom-link" href="">Sobre nosotros</a>
                </li>
                <li>
                    <a className="font-semibold custom-link" href="">Servicios</a>
                </li>
                <li>
                    <a className="font-semibold custom-link" href="">Clientes</a>
                </li>
            </ul>
            <div className="flex items-center justify-end">
                <a className="button" href="">
                    programar una llamada
                </a>
            </div>
        </header>
    )
}
