import Head from 'next/head';
import Header from './Header';
import Footer from './Footer'

export default function Layout(props) {
  const metaData = (seo) => {
    let metaArr = [];
    for (const key in seo) {
      metaArr.push(
        <meta name={key.split("meta_")[1]} content={seo[key]} key={key} />,
      );
    }
    return metaArr;
  }

  return (
    <div className="layout">
      <Head>
        <title>Just Add Marmite</title>  
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          type="text/css"
          rel="stylesheet"
        />
        {props.seo ? metaData(props.seo) : null}
      </Head>

      {props.header && <Header header={props.header} />}
      <main>
        { props.children }
      </main>
      {props.footer && <Footer footer={props.footer} />}

      <style jsx>{`
        body {
          font-family: "Open Sans", sans-serif;
        }
        #asdf4534 {
          width: 100%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}