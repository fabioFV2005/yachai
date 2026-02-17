import React, { useState } from 'react'

export const Form = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        consulta: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-4 lg:mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mt-24 md:mt-36">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-petroleum mb-2">
                Contáctanos
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-6 md:mb-8">
                Completa el formulario y nos pondremos en contacto contigo
            </p>

            <div className="space-y-6">
                <div className="relative">
                    <label htmlFor="nombre" className="block text-sm font-semibold text-blue-petroleum mb-2">
                        Nombre Completo
                        <span className="text-soft-blue ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-off-white border-2 border-pearl-gray rounded-xl 
                                 focus:outline-none focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/20
                                 transition-all duration-300 text-gray-700 placeholder-gray-400"
                        placeholder="Ingresa tu nombre completo"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="telefono" className="block text-sm font-semibold text-blue-petroleum mb-2">
                        Número de Teléfono
                        <span className="text-soft-blue ml-1">*</span>
                    </label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-off-white border-2 border-pearl-gray rounded-xl 
                                 focus:outline-none focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/20
                                 transition-all duration-300 text-gray-700 placeholder-gray-400"
                        placeholder="+51 999 999 999"
                    />
                </div>

                <div className="relative">
                    <label htmlFor="correo" className="block text-sm font-semibold text-blue-petroleum mb-2">
                        Correo Electrónico
                        <span className="text-soft-blue ml-1">*</span>
                    </label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-off-white border-2 border-pearl-gray rounded-xl 
                                 focus:outline-none focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/20
                                 transition-all duration-300 text-gray-700 placeholder-gray-400"
                        placeholder="tucorreo@ejemplo.com"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="consulta" className="block text-sm font-semibold text-blue-petroleum mb-2">
                        Descripción o Consulta
                        <span className="text-soft-blue ml-1">*</span>
                    </label>
                    <textarea
                        id="consulta"
                        name="consulta"
                        value={formData.consulta}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-off-white border-2 border-pearl-gray rounded-xl 
                                 focus:outline-none focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/20
                                 transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none"
                        placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    />
                </div>

                <button
                    type="submit"
                    className="button w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                    Enviar Consulta
                </button>
            </div>
        </form>
    )
}
