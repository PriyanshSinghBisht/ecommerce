const textAnimation = {
    initial: {
      opacity: 0,
      y: 100
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.3
    },
    viewport: {
      once: true
    }
  };

  export { textAnimation };