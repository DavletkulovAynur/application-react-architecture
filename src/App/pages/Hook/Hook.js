import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {changeStateTest} from "../../../Redux/actions/action";

function Hook() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.appReducer)

  const dispatchAction = () => {
    dispatch(changeStateTest())
  }
  return (
    <div>
      <h1>HOOK</h1>
      <div>
        <button onClick={dispatchAction}>DISPATCH</button>
      </div>
    </div>
  );
}

export default Hook
