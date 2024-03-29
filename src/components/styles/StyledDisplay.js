import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center; 
  margin: 0 0 20px 20px;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.6);
  color: ${props => (props.gameOver ? 'red' : '#999')};
`;