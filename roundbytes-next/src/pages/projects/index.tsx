import { projectData } from '@/data/data'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import ButtonStorke from '@/components/button/ButtonStroke'

const Projects = () => {
    console.log(projectData);

    return (
        <AwesomeSlider
            animation={'cubeAnimation'}
            fillParent={true}
            bullets={false}
            organicArrows={true}
        >
            {projectData.map((item) => (
                <div
                    key={item.id}
                    className={`flex items-center justify-center overflow-y-hidden h-screen w-screen px-[10%] relative`}
                    style={{
                        backgroundImage: `url(${item.backgroundImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className='text-white text-center mb-12 z-0'>
                        <span className='text-white mb-2'>
                            {item.subtitle.toUpperCase()}
                        </span>
                        <h1 className='text-web-h0 font-bold md:text-mobile-h1 mb-24'>
                            {item.title}
                        </h1>
                        <h4 className='text-web-h4 md:text-mobile-h4 '>
                            {item.description}
                        </h4>
                    </div>

                    <div className='absolute bottom-[10%] z-index-0'>
                        <ButtonStorke
                            color='white'
                            text='View Project'
                            link={item.link}
                        />
                    </div>
                </div>
            ))}
        </AwesomeSlider>
    );
}

export default Projects;
