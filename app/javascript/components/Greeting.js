import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { useEffect } from 'react';
import { fetchMessage } from '../redux/greeting';
const Greeting = () => {
  const { message } = useSelector((state) => state.greetings);
 const dispatch = useDispatch();

 useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  return (
    <React.Fragment>
      <p>{message}</p>
    </React.Fragment>
  );
};

export default Greeting;
