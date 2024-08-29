import React from 'react'
import Section from '../section'

export const Explore: React.FC = () => {
  return (
    <Section>
      <h2 className="text-center text-3xl font-bold mb-20">Explore more</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        <div className="flex flex-cols-2 gap-5 items-center relative h-full w-full shadow-sm">
          <Image1 />
          <div className="items-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">Our resources</h3>
            <div className="absolute bottom-16 right-50">
              <Icon />
            </div>
          </div>
        </div>
        <div className="w-full items-center justify-center space-y-6 shadow-sm">
          <Image2 />
          <div className="bottom-4 left-4 flex justify-evenly items-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">Our archives</h3>
            <Icon />
          </div>
        </div>
        <div className="w-full items-center justify-center space-y-5 shadow-sm">
          <Image3 />
          <div className="bottom-4 left-4 flex justify-evenly items-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">Merchandise shop</h3>
            <Icon />
          </div>
        </div>
        <div className="flex flex-cols-2 gap-5 items-center relative h-full w-full shadow-sm">
          <Image4 />
          <div className="items-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">Virtual workshops</h3>
            <div className="absolute bottom-16 right-50">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Icon: React.FC = () => (
  <svg className="w-8 h-8 fill-current text-[#fa0f00]" viewBox="0 0 512 512">
    <path d="M512 256c0-141.4-114.6-256-256-256S0 114.6 0 256c0 141.4 114.6 256 256 256S512 397.4 512 256zM265.9 382.8C259.9 380.3 256 374.5 256 368v-64H160c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C278.7 383.9 271.9 385.3 265.9 382.8z" />
  </svg>
)

interface ImageComponentProps {
  top: string;
  left: string;
  width: string;
  height: string;
  backgroundImage: string;
  additionalClasses?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ top, left, width, height, backgroundImage, additionalClasses = '' }) => (
  <div
    className={`bg-center ${additionalClasses}`}
    style={{
      top,
      left,
      width,
      height,
      borderRadius: '1.375rem', // 22px / 16
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  />
);

const Image1 = () => (
  <ImageComponent
    top="210.375rem" // 3366px / 16
    left="4.25rem" // 68px / 16
    width="25.9375rem" // 415px / 16
    height="16.5rem" // 264px / 16
    backgroundImage="https://images.unsplash.com/photo-1424115087662-5845efc6b366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxCb29rcyUyQyUyMFN0dWR5JTJDJTIwTGVhcm5pbmd8ZW58MXx8fHwxNzIzNzY4MTY2fDA&ixlib=rb-4.0.3&q=80&w=1080"
    additionalClasses="flex justify-start"
  />
);

const Image2 = () => (
  <ImageComponent
    top="210.375rem" // 3366px / 16
    left="46.875rem" // 750px / 16
    width="100%"
    height="20.625rem" // 330px / 16
    backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxEZXNrJTJDJTIwQ29tcHV0ZXIlMkMlMjBSZXNlYXJjaHxlbnwxfHx8fDE3MjM3OTA4MTF8MA&ixlib=rb-4.0.3&q=80&w=1080"
  />
);

const Image3 = () => (
  <ImageComponent
    top="230.625rem" // 3690px / 16
    left="4.25rem" // 68px / 16
    width="100%"
    height="20.625rem" // 330px / 16
    backgroundImage="https://images.unsplash.com/photo-1528562014890-9cc833b10c23?crop=entropy&cs=tinysrgb&cover=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxDYWxjdWxhdG9yJTJDJTIwRGVzayUyQyUyMFN0dWR5fGVufDF8fHx8MTcyMzc5MDgxMXww&ixlib=rb-4.0.3&q=80&w=1080"
  />
);

const Image4 = () => (
  <ImageComponent
    top="238.875rem" // 3822px / 16
    left="46.875rem" // 750px / 16
    width="25.9375rem" // 415px / 16
    height="16.5rem" // 264px / 16
    backgroundImage="https://images.unsplash.com/photo-1604933834413-4cbe62737214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxNYXRoJTJDJTIwQ2xhc3Nyb29tJTJDJTIwU3VwcGxpZXN8ZW58MXx8fHwxNzIzNzkwODExfDA&ixlib=rb-4.0.3&q=80&w=1080"
    additionalClasses="flex justify-start"
  />
);