import Stack from "../sdk-plugins/index";
import Layout from "../components/Layout";
import RecipesPage from "../templates/RecipesPage";

const Recipes = (props) => {
  return (
    <Layout header={props.header} footer={props.footer} seo={props.result.seo}>
      <RecipesPage page={props.result} recipes={props.allrecipes} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  try {
    let result = await Stack.getEntry("recipes_page", "en-us");
    const recipes = await Stack.getEntry('recipe', "en-us");
    const header = await Stack.getEntry('header', "en-us");
    const footer = await Stack.getEntry('footer', "en-us");

    return {
      props: {header: header[0][0], footer: footer[0][0], result: result[0][0], allrecipes: recipes[0]},
      revalidate: 1
    };
  } catch (error) {
    console.error(error);
  }
}

export default Recipes;