import React, { Component } from 'react';
import {formatTimestamp, formatUsername, formatTags} from '../../utilities';
import style from './style.scss';

class Card extends Component {
    render() {
        const { author, date_taken, tags, link, media } = this.props.item;
        const { m: thumbnail } = media;

        return (
            <div className="card">
                <div className="thumbnail">
                    <img src={thumbnail} />
                </div>
                <div className="details">
                    <div className="item">
                        <span className="label">Author:</span>
                        <span className="value">{formatUsername(author)}</span>
                    </div>
                    <div className="item">
                        <span className="label">Date taken:</span>
                        <span className="value">{formatTimestamp(date_taken)}</span>
                    </div>
                    <div className="item">
                        <span className="label">Tags:</span>
                        <span className="value">{formatTags(tags)}</span>
                    </div>
                </div>
                <div className="button">
                    <a className="link" href={link} target="_blank">
                        Open Image
                    </a>
                </div>
            </div>
        )
    }
}

export default Card;