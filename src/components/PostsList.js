/*
 * Created Date: Sat, 10th Jul 2021, 15:24:27 pm
 * Author: Kristyna Fojtikova
 */

import React from "react";
import { connect } from "react-redux"
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostsList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers()
    }

    renderPosts() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id} >
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>
                                {post.title}
                            </h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui relaxed devided list">
                {this.renderPosts()}
            </div>)
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostsList);