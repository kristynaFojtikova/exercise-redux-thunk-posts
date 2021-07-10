/*
 * Created Date: Sat, 10th Jul 2021, 21:34:12 pm
 * Author: Kristyna Fojtikova
 */

import React from "react";
import { connect } from "react-redux";

const UserHeader = ({ userId, user, fetchUser }) => {
    if (!user) {
        return null;
    }
    return (
        <div className="header">{user.name}</div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const user = state.users.find(user => user.id === ownProps.userId)
    return {
        user
    }
}

export default connect(mapStateToProps)(UserHeader);