export const Card = ({ image, title, description }) => {
    return (
        <div className=" bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-petroleum/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-petroleum mb-3">
                    {title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}
