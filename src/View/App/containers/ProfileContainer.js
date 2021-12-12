import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";

import { Profile } from "../components/Profile/Profile";

const ProfileContainer = () => {
  return <Profile />;
};


const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
);
