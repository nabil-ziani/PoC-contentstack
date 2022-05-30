const HomePage = ({page}) => {
  const [banner_section, about_section, chefs_section] = page.page_content;

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
  )

  const about = () => (
    <div>

    </div>
  )

  return (
    <>
      <div className="hero-banner">
        {herobanner()}
      </div>
      <div className="page-content">
      
      </div>
    </>
  );
}

export default HomePage;