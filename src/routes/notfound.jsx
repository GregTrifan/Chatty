import React from "react";
import {motion} from "framer-motion";
import {Heading} from "evergreen-ui";
const Lost = () => {
    return (<>
        <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    >
        <Heading size={900}>404</Heading>
        </motion.div>
        <motion.div
        initial={{ size:0}}
        animate={{ size:1,rotate:720}}
        >
           <Heading size={600}>More routes coming soon!!</Heading>
            </motion.div>
            </>
    );
};
export default Lost