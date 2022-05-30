import Stack from "../sdk-plugins/index";
import Layout from "../components/Layout";
import HomePage from "../templates/HomePage";

const Home = ({data}) => {
  return (
    <Layout header={data.header} footer={data.footer} seo={data.result.seo}>
      <HomePage page={data.result} />
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  try {
    const result = await Stack.getEntry('home', "en-us");
    const header = await Stack.getEntry('header', "en-us");
    const footer = await Stack.getEntry('footer', "en-us");

    return { data: {result: result[0][0], header: header[0][0], footer: footer[0][0]} };
  } catch (error) {
    console.error(error);
  }
}

export default Home;