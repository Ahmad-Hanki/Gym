import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HOne from "@/shared/HOne";
import BenefitList from "@/shared/Benefits";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }, // Corrected here
    },
  };
  return (
    <section className="mx-auto min-h-full w-5/6 py-6" id="benefits">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // when it will tregure? after 50%
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* hshdshbbuqbwuoebcvubquberqivhbvouhqervhubqeubvuqhbevuqbhv */}
          <HOne className="basis-3/5 font-montserrat text-3xl font-bold ">
            {" "}
            More Than Just Gym.{" "}
          </HOne>
          <p className="my-5 text:sm">
            {" "}
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.{" "}
          </p>
        </motion.div>
        {/* benefits */}
        {/* hheerrreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {BenefitList.map((item) => (
            <Benefit
              // herrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrre
              setSelectedPage={setSelectedPage}
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
        {/* graphic and description */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // when it will tregure? after 50%
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex"
        >
          {/* graphic */}
          <img src={BenefitsPageGraphic} alt="benefit page graphic" />

          {/* description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className=" before:absolute before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }} // when it will tregure? after 50%
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HOne>
                    Millions Of Happy Members Getting{" "}
                    <span className="text-primary-500 ">Fit </span>
                  </HOne>
                </motion.div>
              </div>
            </div>
            {/* decrepit */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // when it will after 50%
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 ">
                Sports are more than just physical activities; they are a
                gateway to physical health, mental resilience, and social bonds.
                Whether engaged in team sports like soccer or individual
                pursuits like running, the sporting world provides diverse
                avenues for personal growth. Beyond the immediate benefits of
                fitness, participating in sports fosters essential life skills
                such as teamwork, strategic thinking, and sportsmanship,
                contributing to holistic development.
              </p>

              <p className="mb-5">
                The impact of sports resonates globally, from iconic events like
                the Olympics to local grassroots initiatives. Athletes,
                celebrated as cultural icons, inspire millions with their
                dedication. Sports serve as a catalyst for social change,
                promoting inclusively and breaking down barriers. Whether on a
                grand stage or at the community level, the world of sports
                weaves a tapestry of passion, resilience, and the relentless
                pursuit of excellence.
              </p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16 ">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  JOIN NOW
                </ActionButton>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
