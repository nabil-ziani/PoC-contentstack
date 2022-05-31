import Stack from "../../sdk-plugins/index";
import Layout from "../../components/Layout";
import RecipeTemplate from "../../templates/RecipeTemplate";

const RecipeDetails = (props) => {
  return (
    <Layout header={props.header} footer={props.footer}>
      <RecipeTemplate page= {props.result} />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const result = await Stack.getEntryWithRef(
    "recipe",
    'recipe_creator',
    "en-us",
  );

  const paths = result[0].map(item => {
    var slug = item.url.replace("/recipes/", "");

    return {
      params: { recipe: slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps (context) {
  const recipeLink = context.params.recipe;

  try {
    const result = await Stack.getSpecificEntryWithRef(
      "recipe",
      `/recipes/${recipeLink}`,
      'recipe_creator',
      "en-us",
    );
    const header = await Stack.getEntry("header", "en-us");
    const footer = await Stack.getEntry("footer", "en-us");
    
    return { props: {header: header[0][0], footer: footer[0][0], result: result[0]} };
  } catch (error) {
    console.error(error);
  }
}

export default RecipeDetails;