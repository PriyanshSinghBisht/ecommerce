import { motion } from 'framer-motion';

const SvgStar = ({ classname }: { classname: string }) => {
  return (
    <motion.svg
      initial={{ rotate: 0, scale: 1 }}
      animate={{ rotate: 360 , scale: 2}}
      transition={{ duration: 10, repeat: Infinity , alternate: true}}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="25"
      height="25px"
      className={classname}
    >
      <path d="M5 5 Q50 50 95 5 Q50 50 95 95 Q50 50 5 95 Q50 50 5 5" strokeLinejoin="round" ></path>
    </motion.svg>
  );
};

export default SvgStar;
