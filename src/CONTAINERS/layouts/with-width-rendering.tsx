import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../../STORES/types";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const GridView = (props: any) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: app.CHANGE_GRID_VIEW,
      grid: props.width,
    });
  }, [props.width]);

  return <div></div>;
};
export default withWidth()(GridView);
