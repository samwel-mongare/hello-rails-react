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
      <p class="w-screen h-screen text-center mt-72">{message}</p>
    </React.Fragment>
  );
};

export default Greeting;
