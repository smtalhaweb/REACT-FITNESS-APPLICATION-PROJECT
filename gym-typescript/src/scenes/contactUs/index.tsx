import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import Htext from "@/shared/Htext";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
const ContactUs = ({ setSelectedPage }: Props) => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();
    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
  return (
      <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
          <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
              {/* HEADER */}
              <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible:{opacity: 1, x: 0}
                    }}
                >
                  <Htext>
                       <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                  </Htext>
                  <p className="my-5">
                      Join our Gym to get into our best facilities 
                   </p>
              </motion.div>
              {/* FORM AND IMAGE */}
              <div className="mt-10 justify-between gap-8 md:flex">
                  <motion.div
                      className="mt-10 basis-3/5 md:mt-0"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1 }}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible:{opacity: 1, y: 0}
                    }}  
                  >
                      <form
                          target="blank"
                          onSubmit={onSubmit}
                          action="https://formsubmit.co/"
                          method="POST"
                      >
                          {/* FOR NAME BLOCK */}
                          <input
                              className={inputStyles}
                              type="text"
                              placeholder="NAME"
                              {...register("name", {
                                  required: true,
                                  maxLength:100
                              })}
                          /> 
                          {errors.name && (
                              <p className="mt-1 text-primary-500">
                                  {errors.name.type === "required" && "This field is required."}
                                  {errors.name.type === "maxLength" && "max length has 100 characters."}
                              </p>
                          )}

                          {/* FOR EMAIL BLOCK */}
                          <input
                              className={inputStyles}
                              type="text"
                              placeholder="EMAIL"
                              {...register("email", {
                                  required: true,
                                  pattern: 
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              })}
                          /> 
                          {errors.email && (
                              <p className="mt-1 text-primary-500">
                                  {errors.email.type ===  "required" && "This field is required."}
                                  {errors.email.type === "pattern" && "invalid email address"}
                              </p>
                          )}
                          {/* FOR MESSAGE BLOCK   */}
                          <textarea
                              className={inputStyles}
                              placeholder="MESSAGE"
                              rows={5}
                              cols={4}  
                              {...register("message", {
                                  required: true,
                                  maxLength:100
                              })}
                          /> 
                          {errors.message && (
                              <p className="mt-1 text-primary-500">
                                  {errors.message.type ===  "required" && "This field is required."}
                                  {errors.message.type === "maxLength" && "max length has 2000 characters."}
                              </p>
                          )}
                          <button
                              type="submit"
                              className="mt-1 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-primary-500 hover:text-white"
                          >
                              SUBMIT
                          </button>
                      </form>
                   </motion.div>
              </div>
              <motion.div
                      className="relative mt-16 basis-1/5 md:mt-40 md:mb-40 md:p-20"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{delay:0.2, duration: 1 }}
                      variants={{
                        hidden: {opacity: 0, y: 50 },
                        visible:{opacity: 1, y: 10}
                    }}
              >
                  <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] before:content-evolvetext">
                      <img
                          className="rounded-2xl"
                          src={ContactUsPageGraphic}
                          alt="contact-us-page-graphic"
                      />
                  </div>
              </motion.div>
          </motion.div>
    </section>
  )
}

export default ContactUs;