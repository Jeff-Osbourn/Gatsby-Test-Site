import * as React from 'react'

const PageTransition = () => {
  const { transition } = useContext(TransitionContext);
  const [playState, setPlayState] = useState(transition);

  useEffect(() => {
    setPlayState(transition);
  }, [transition]);

  return (
    <AnimatePresence>
      {playState && (
        <motion.div
          variants={parentVariants}
          initial="visible"
          animate="hidden"
          exit="visible"
          aria-hidden={true}
          css={css`
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 11;
            pointer-events: none;
            transform-origin: left;

            > div {
              height: 25vh;
              margin-top: -5vh;
              width: 100vw;
              background-color: #3466bf;
              transform-origin: right;
            }
            > figure {
              position: fixed;
              top: calc(50% - 8rem);
              left: calc(50% - 8rem);
              transform-origin: center;
              width: 16rem;
              height: 16rem;
              z-index: 12;
              padding: 0;
              margin: 0;
              svg {
                width: 100%;
                height: 100%;
              }
            }
          `}
        >
          <motion.div variants={childVariants} exit={'visible'} key={0}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit={'visible'} key={1}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit={'visible'} key={2}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit={'visible'} key={3}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit={'visible'} key={4}>
            {' '}
          </motion.div>
          <motion.figure variants={childVariantHead} exit={'visible'} key={5}>
            <HeadLogo />
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
