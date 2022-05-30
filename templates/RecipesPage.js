import RecipeCard from "../components/RecipeCard";

const RecipesPage = ({page, recipes}) => {
  const [banner_section, recipes_section] = page.page_content;

  const herobanner = () => (
    <div>
      {banner_section.Hero_Banner.banner_image && <img className="fullwidth" src={banner_section.Hero_Banner.banner_image.url} />}
      <div className="banner-content" style={{backgroundColor: banner_section.Hero_Banner.bg_color}}>
      <h1>
        <span>{banner_section.Hero_Banner.title}</span>
        <br />
        <span><b>{banner_section.Hero_Banner.sub_title}</b></span>
      </h1>
      {banner_section.Hero_Banner.call_to_action.title && <div className="actions">
        <Link href={banner_section.Hero_Banner.call_to_action.href}>
          <a>{banner_section.Hero_Banner.call_to_action.title}</a>
        </Link>
      </div>}
      </div>
    </div>
  );

  console.log(recipes)
  // const recipes = () => {
  //   <div className="recipe-list">
  //     {recipes_section.Recipes.recipes.map(recipe => (
  //       <RecipeCard key={recipe.uid} recipe={recipe} />
  //     ))}

  //     <style jsx>{`
  //       .recipe-list {
  //         display: grid;
  //         grid-template-columns: 1fr 1fr;
  //         grid-gap: 20px 60px;
  //       }
  //     `}</style>
  //   </div>
  // }

  return (
    <>
      <div className="hero-banner">
        {herobanner()}
      </div>
      <div className="page-content">
      <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.uid} recipe={recipe} />
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
      </div>
    </>
  );
}

export default RecipesPage;