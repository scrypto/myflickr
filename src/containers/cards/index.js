import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/card';
import Loading from '../../components/loading';
// import Waypoint from 'react-waypoint';
// import Pagination from "react-js-pagination";
import { getPosts } from '../../apis/posts';
// import { pagingAmount, initialSearchTerm } from '../../config'
import style from './style.scss'

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tags: "",
        };
    }

    componentDidMount() {
        getPosts(this.state.tags);
    }

    render() {
        return (
            <>
                {this.props.loading && (
                    <div className="loading">
                        <Loading />
                    </div>
                )}
                {!this.props.loading && (
                    <div className="cards">
                        {
                            this.props.items.map((item, id) => {
                                    return (
                                        <Card
                                            key={id}
                                            item={item}
                                        />
                                    )
                                }
                            )}
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        loading: store.postState.loading,
        items: store.postState.items,
    };
};

export default connect(mapStateToProps)(Index)