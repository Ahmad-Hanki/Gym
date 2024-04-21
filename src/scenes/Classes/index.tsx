import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HOne from "@/shared/HOne";
import classes from "@/shared/Classes";
import Class from "./Class";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 0, x: 0 },
          }}
          className="mx-auto w-5/6 "
        >
          <div>
            <HOne>Our Classes</HOne>
          </div>
          <p className="py-5 md:w-3/5">
            Sport classes provide a dynamic space for individuals to enhance
            their physical abilities and learn valuable life skills. Whether
            focusing on specific sports or general fitness, these classes offer
            structured guidance and foster teamwork, discipline, and
            perseverance. Instructors play a key role in creating a supportive
            environment, promoting both personal achievement and a sense of
            community among participants.
          </p>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
                {classes.map((item , index) =>(
                    <Class key = {`${item.name}-${index}`} name = {item.name} description = {item.description} img = {item.img}/>
                ) )}
            </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
