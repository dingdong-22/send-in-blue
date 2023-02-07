function Title() {
  return (
    <div>
      <a className="full_title" href="https://www.sendinblue.com/">
        <img
          className="title_logo"
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/g0wipqhbt9udqeb1rdcb"
          alt="title_logo"
        />
        {/* I can't get the image from my folder ? */}
        {/* <img
          className="title_logo"
          src="../images/title_logo_png"
          alt="title_logo"
        /> */}
        <h1 className="title_text">sendinblue</h1>
      </a>
    </div>
  );
}

export default Title;
