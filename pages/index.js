import Stack from "../sdk-plugins/index";
import Layout from "../components/Layout";
import HomePage from "../templates/HomePage";

const Home = (props) => {
  return (
    <Layout header={props.header} footer={props.footer} seo={props.result.seo}>
      <HomePage page={props.result} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  try {
    const result = await Stack.getEntry('home', "en-us");
    const header = await Stack.getEntry('header', "en-us");
    const footer = await Stack.getEntry('footer', "en-us");

    return { props: {result: result[0][0], header: header[0][0], footer: footer[0][0]} };
  } catch (error) {
    console.error(error);
  }
}

export default Home;