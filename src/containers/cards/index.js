import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/card';
import Loading from '../../components/loading';
import Error from '../../components/error';
import { getPosts } from '../../apis/posts';
import style from './style.scss'

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tags: "",
            error: false,
        };
    }

    componentDidMount() {
        getPosts(this.state.tags);
    }

    render() {
        return (
            <>
                {this.props.error && (
                    <div className="error">
                        <Error message="There is an issue with flickr search. Please try again later." />
                    </div>
                )}
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
        error: store.postState.error,
    };
};

export default connect(mapStateToProps)(Index)