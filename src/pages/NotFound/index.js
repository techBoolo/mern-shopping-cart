import { useNavigate } from 'react-router-dom'

const NotFound = (props) => {
  const navigate = useNavigate()

  return (
    <>
      <h4>404</h4>
      <p>nothing here</p> 
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate('/')}>home</button>
    </>
  );
};

export default NotFound
