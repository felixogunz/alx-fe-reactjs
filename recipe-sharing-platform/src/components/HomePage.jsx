import { Link } from "react-router-dom";

return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {recipes.map((recipe) => (
      <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
);
