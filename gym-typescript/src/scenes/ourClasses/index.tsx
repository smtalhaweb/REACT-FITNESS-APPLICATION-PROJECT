import { SelectedPage,ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.jpg";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from "./Class"; 

const classes: Array<ClassType>=[
    {
        name: "Stay in the fat-burning zone.",
        description: "Determine your target heart rate by subtracting your age from 220, then multiplying the result by 0.7 for beginners and 0.75 for more advanced athletes. High-intensity training boosts metabolism, so between sets of weights, do a minute-long sprint on a treadmill, skip rope or run in place.",
        image:image1
    },
    {
        name: "Target big muscle groups",
        description:"Two or three weeks isn’t enough time to target one specific muscle group, so stick to workouts that focus on large areas like the legs, chest and back, or the entire body.",
        image:image2
    },
    {
        name: "Stay in the fat-burning zone.",
        description: "Determine your target heart rate by subtracting your age from 220, then multiplying the result by 0.7 for beginners and 0.75 for more advanced athletes.",
        image:image3
    },
    {
        name: "Stamina Boost-up Classes",
        description: "Plan your days and select equipments for your workout according to the schedule made for the entire week",
        image:image4
    },
    {
        name: "The last-minute pump.",
        description: "The day is here. You’re toned and ready to go. Time for the final push. Before a competition, bodybuilders drink a few sips of red wine to dilate their veins so the veins are more prominent and do a quick pump to boost blood flow and provide last-minute definition. Curls in the limo, anyone",
        image:image5
    },
    {
        name: "Plan your attack.",
        description: "Before you hit the gym for the first time, grab a journal and write down your workouts. “You don’t want to be stuck at the gym trying to figure out what to do,” Braganza says. “Workouts should last no more than two hours, with a 60-minute max on weight training and 30 to 45 minutes of cardio.”",
        image:image6
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const OurClasses = ({ setSelectedPage }: Props) => {
  return (
      <section
          id="ourclasses"
          className="w-full bg-primary-100"
      >
          <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}
          >
              <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible:{opacity: 1, x: 0}
                     }}
              >
                  <div className="md:w-3/5">
                    <Htext>OUR CLASSES</Htext>
                    <p className="py-5">EvoGym is offering numerous types of classes based on the stemina a person would have.Well, in general, as a person below BMI of ........ </p>  
                  </div>
              </motion.div>
              <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                  <ul className="w-[2800px] whitespace-nowrap">
                      {classes.map((item:ClassType, index)=>(
                          <Class
                              key={`${item.name}-${index}`}
                              name={item.name}
                              description={item.description}
                              image={item.image}
                          />
                      ))}
                  </ul>
              </div>
          </motion.div>
    </section>
  )
}

export default OurClasses;