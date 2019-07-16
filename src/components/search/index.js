import { debounce } from "lodash";
import React, { Component } from 'react';
import { getPosts } from '../../apis/posts';
import { FaSearch } from 'react-icons/fa';
import style from './style.scss';

class Search extends Component {
    // debounceUpdate;

    constructor(props) {
        super(props);
        this.debounceUpdate = debounce(
            this.handleSubmit,
            1000,
        );
        this.state = {
            debounce: null,
            searchValue: '',
            placeholder: "Enter search"
        };
    }

    handleChange(e) {
        this.setState({
            searchValue: e.target.value
        });
        this.debounceUpdate();
    };

    handleSubmit(e) {
        getPosts(this.state.searchValue);
    }

    render() {

        return (
            <div className="search">
                <span className="searchIcon"><FaSearch /></span>
                <input
                    className="searchInput"
                    placeholder={this.state.placeholder}
                    value={this.state.searchValue}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        )
    }
}

export default Search;