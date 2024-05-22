import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const ProjectCard = ({index,name,description,tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 
    index * 0.5, 0.75)}>
      <Tilt
        option={{
          max:45,
          scale:1,
          speed:450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[180px]">
            <img src={image} alt={name}
            className="w-full h-full object-cover rounded-2xl" />

                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() => window.open (source_code_link,"_blank")}
                    className="bg-[#d81e5b] w-8 h-8
                    rounded-full flex justify-center items-center cursor-pointer">
                      <svg className="w-1/2 h-1/2" object-contain xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                  </div>
                </div>

          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants = {textVariant()}>
        <p className={styles.sectionSubText}>
          My work &#129305;
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion variants={fadeIn("","",0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos in it. It reflects my ability 
          to solve complex problems, work with different technologies, and manage projects effectively.
        </motion>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"")