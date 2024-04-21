import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import HOne from "@/shared/HOne";
import Input from "@/shared/Input";
import Button from "@/shared/Button";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    trigger, // validate the form
    register, // rules
    formState: { errors },
  } = useForm();

  async function onSubmitHandler(e: any) {
    const isValid = await trigger();
    if (!isValid) {
      console.log(errors);

      e.preventDefault();
    }
  }

  return (
    <section className="mx-auto w-5/6 pt-24 pb-32" id="contactus">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* header */}
        <motion.div
          className="md:3-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // when it will tregure? after 50%
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HOne>
            <span className="text-primary-500">JOIN NOW</span> To Get In Shape
          </HOne>
          <p className="my-5">
            Joining sport classes offers a gateway to physical fitness and
            personal development. Whether you prefer team sports or individual
            activities, these classes provide a structured environment led by
            experienced instructors. Embrace the opportunity to improve your
            fitness, acquire valuable skills, and become part of a supportive
            community that shares your enthusiasm for an active lifestyle
          </p>
        </motion.div>
        {/* form and images */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // when it will tregure? after 50%
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-="
          >
            <form
              target="_blank"
              onSubmit={onSubmitHandler}
              action="https//formsubmit.co/itxti909@gmail.com"
              method="POST"
            >
              <Input
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  minLength: 2,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {/* Check if errors.name exists before accessing its properties */}
                  {errors.name?.type === "required" && "This Field is required"}
                  {(errors.name?.type === "minLength" ||
                    errors.name?.type === "maxLength") &&
                    "Must have from 0 to 20 char"}
                </p>
              )}
              <Input
                type="email"
                placeholder="email"
                {...register("email", {
                  required: true,
                  maxLength: 100,
                  minLength: 5,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {/* Check if errors.email exists before accessing its properties */}
                  {errors.email?.type === "required" &&
                    "This Field is required"}
                  {(errors.email?.type === "minLength" ||
                    errors.email?.type === "maxLength") &&
                    "Must have from 5 to 100 char"}
                  {errors.email?.type === "pattern" && "Invalid Email Address"}
                </p>
              )}
              <Input
                type="textarea"
                placeholder="Message"
                {...register("Message", {
                  required: true,
                  maxLength: 500,
                  minLength: 20,
                })}
              />
              {errors.Message && (
                <p className="mt-1 text-primary-500">
                  {/* Check if errors.Message exists before accessing its properties */}
                  {errors.Message?.type === "required" &&
                    "This Field is required"}
                  {(errors.Message?.type === "minLength" ||
                    errors.Message?.type === "maxLength") &&
                    "Must have at least 20 char"}
                </p>
              )}

              <Button className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white ">
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
