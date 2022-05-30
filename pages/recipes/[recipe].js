import Stack from "../../sdk-plugins/index";

const RecipeDetails = () => {

  return (
    <div>
      Recipe Details
    </div>
  )
}



RecipeDetails.getInitialProps = async ({query}) => {
  const recipeLink = query.recipe;

  try {
    const result = await Stack.getSpecificEntry(
      "recipe",
      `/recipes/${recipeLink}`,
      // 'chef',
      "en-us",
    );

    // const header = await Stack.getEntry("header", "en-us");
    // const footer = await Stack.getEntry("footer", "en-us");
    return { data: { result: result[0]} };
  } catch (error) {
    console.error(error);
  }
}

export default RecipeDetails;