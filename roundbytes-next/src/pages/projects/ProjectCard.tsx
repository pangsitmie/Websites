import { StyledProjectCard } from '@/components/styles/card/ProjectCard.stled';
import { H2, H3, H4, P } from '@/components/styles/typography/typography.styled';

type Props = {
    title: string;
    subtitle: string;
    cardImage: string;
    onClick: () => void;
};

const ProjectCard = ({ title, subtitle, cardImage, onClick }: Props) => {
    const cardStyle = {
        backgroundImage: `url(${cardImage})`,
        backgroundSize: 'cover',
    };

    const titleLines = title.split('\n');


    return (
        <StyledProjectCard
            className="flex flex-col p-5 justify-between"
            style={cardStyle}
            onClick={onClick}>
            <div></div>
            <div>
                <P className='text-white mb-2'>{subtitle}</P>
                {/* Render each line of the title */}
                {titleLines.map((line, index) => (
                    <H3 key={index} className='font-semibold text-white text-xl'>
                        {line}
                    </H3>
                ))}
            </div>
            <H4>
                {"hoverText"}
            </H4>
        </StyledProjectCard>
    );
};

export default ProjectCard;
