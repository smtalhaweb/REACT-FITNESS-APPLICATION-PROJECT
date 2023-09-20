import Logo from "@/assets/Logo.png";
const Footer = () => {
  return (
      <footer className="bg-primary-300 py-20">
          <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
              <div className="mt-16 basis-1/2 md:mt-0">
                  <img src={Logo} alt="logo" />
                  <p className="my-5">
                    EVOGYM TRAINING AND FITNESS CENTRE.ALL YOU NEED AT ONE PLATFORM.
                  </p>
                  <p>
                    EVOGYM All Rights reserved.      
                  </p>
              </div>
              <div className="mt-16 basis-1/2 md:mt-0">
                  <h4 className="font-bold">LINKS</h4>
                  <p className="my-5">WEBSITE MADE BY SYED MEHBOOB TALHA</p>
                  <p className="my-5">Email Id:s.mtalha1992@gmail.com</p>
                  <p>HAPPY CODING ....BEING A WEB DEVELOPER </p>
              </div>
              <div className="mt-16 basis-1/2 md:mt-0">
                  <h4 className="font-bold">CONTACT US</h4>
                  <p className="my-5">CELL# +923032188645</p>
                  <p className="my-5">WEBSITE CORE TECHNOLOGIES</p>
                  <p>REACT,TYPESCRIPT,VITE,FRAMER-MOTION & much more....</p>
              </div>
          </div>
    </footer>
  )
}

export default Footer;