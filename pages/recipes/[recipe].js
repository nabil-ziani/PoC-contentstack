import Stack from "../../sdk-plugins/index";
import Layout from "../../components/Layout";
import RecipeTemplate from "../../templates/RecipeTemplate";

const RecipeDetails = ({data}) => {
  return (
    <Layout header={data.header} footer={data.footer}>
      <RecipeTemplate page= {data.result} />
    </Layout>
  )
}

RecipeDetails.getInitialProps = async ({query}) => {
  const recipeLink = query.recipe;

  try {
    const result = await Stack.getSpecificEntryWithRef(
      "recipe",
      `/recipes/${recipeLink}`,
      'recipe_creator',
      "en-us",
    );
    const header = await Stack.getEntry("header", "en-us");
    const footer = await Stack.getEntry("footer", "en-us");
    
    return { data: {header: header[0][0], footer: footer[0][0], result: result[0]} };
  } catch (error) {
    console.error(error);
  }
}

export default RecipeDetails;