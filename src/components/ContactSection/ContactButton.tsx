import Discord from '@/assets/icons/discord.svg';
import Envelope from '@/assets/icons/envelope.svg';
import Github from '@/assets/icons/github.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { flashVariants } from './animations';

type ContactButtonProps = {
  label: string;
  href: string;
  delay: number;
};

const ContactButton = (props: ContactButtonProps) => {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const inView = useInView(ref);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (!inView) {
      controls.start('initial');
      return;
    }
    controls.start('flash');
  });

  const handleHover = () => {
    controls.start('hover');
  };

  const handleHoverEnd = () => {
    controls.start('initial');
  };

  const RenderIcon = ({ label }: any) => {
    switch (label.toLowerCase()) {
      case 'github':
        return <Github className="fill-brandText" />;

      case 'discord':
        return <Discord className="fill-brandText" />;

      case 'linkedin':
        return <LinkedIn className="fill-brandText" />;

      case 'email':
        return <Envelope className="fill-brandText" />;
    }
  };

  return (
    <motion.a
      href={props.href}
      target="-1"
      ref={ref}
      initial="initial"
      animate={controls}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      variants={flashVariants(theme, props.delay)}
      className="hov:opacity-100 flex flex-col items-center gap-3 overflow-hidden  text-5xl opacity-70"
    >
      <RenderIcon label={props.label} />
      <div className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-light text-brandText md:text-lg">
        {props.label}
      </div>
    </motion.a>
  );
};

export default ContactButton;