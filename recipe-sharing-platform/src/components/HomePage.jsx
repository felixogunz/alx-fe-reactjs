import { Link } from "react-router-dom";

const HomePage = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{recipe.title}</h2>
            <p className="text-sm">{recipe.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
