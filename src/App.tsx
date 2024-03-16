import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box /* transition={{ delay : 3 }} animate={{borderRadius: "100px"}}  */
            // dampimg:  반동력
            // force : 힘
            // stiffness : 경직됨 
            // elasticity : 탄력성 
            //,damping: 5 ,stiffness : 10 
            transition={{ type: "spring",bounce : 0.5 }} 
            initial={{ scale : 0 }} //초기 스타일
            animate={{ scale: 1 , rotateZ: 360 }}  //최종모습 
            /> 
    </Wrapper>
  );
}

export default App;