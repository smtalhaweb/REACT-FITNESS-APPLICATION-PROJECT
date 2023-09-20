import {benefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphics from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<benefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "At Our gym , you can explore our unique sets of Machines and build your body like an Aesthetic"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "By attending various classes of different tricks and techniques to boost your stemina"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Evogym does not compromise for the trainings given by our Pro Trainers"
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 1}
    }
}

type Props = {
    setSelectedPage:(value:SelectedPage)=> void
}
const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full py-20 w-5/6"
        >
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5 md:mx-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible:{opacity: 1, x: 0}
                    }}
                >
                    <Htext>MORE THAN JUST A GYM.</Htext>
                    <p className="my-5 text-sm"> We provide world's best class fitness equipment,trainers and classes to get you to your ultimate fitness goals wit ease.We care our members</p>
                </motion.div>
                {/* BENEFITS */}
                <motion.div
                    className="ml-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                > 
                    {benefits.map((benefit: benefitType) => (
                        <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage}/>))}
                </motion.div>
                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* graphics */}
                    <img
                        className="mx-auto"
                        src={BenefitsPageGraphics } alt="benefits-page-graphics" />
                    {/* description */}
                    <div>
                        {/* title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible:{opacity: 1, x: 0}
                                        }}
                                >
                                    <Htext>
                                        MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                        <span className="text-primary-500">FIT</span>
                                    </Htext>
                                </motion.div>
                            </div>
                        </div>

                        {/* description */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{delay:0.2, duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible:{opacity: 1, x: 0}
                            }}
                        >
                            <p className="my-5">Dramatically increase your chances of actually getting fit.The study also discovered that 75% of study participants with gym memberships, compared to 18% of non-members, met current health guidelines (about 150 minutes of moderate or 75 minutes of vigorous aerobic activity each week).</p>
                            <p className="mb-5">Joining a gym has many benefits when it comes to an individual's mental health. Exercising has been proven to aid in mental health and getting a gym membership allows one the opportunity to work out their problems. Working out</p>
                        </motion.div>
                        {/* button */}
                        <div className="realtive mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;