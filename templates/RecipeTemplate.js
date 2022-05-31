import Image from "next/image";

const RecipeTemplate = ({page}) => {
  const {featured_image, title, cooking_time, ingredients, method} = page;

  return (
    <div className="page-content">
      <div className="banner">
        <Image src={featured_image.url} width={1200} height={400} />
        <h2>{title}</h2>
      </div>
      <div className="info">Take about {cooking_time} mins to cook.
        <h3>Ingredients</h3>
        {ingredients.map(ing => (
          <span key={ing.ingredient}>{ing.ingredient}</span>
        ))}
      </div>

      <div className="method">
        <h3>Method: </h3>
        <div>
          {method}
        </div>
      </div>

      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  );
}

export default RecipeTemplate;