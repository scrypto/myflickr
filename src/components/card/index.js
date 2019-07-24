import React, { Component } from 'react';
import {formatTimestamp, formatUsername, formatTags} from '../../utilities';
import style from './style.scss';

class Card extends Component {
    render() {
        const { ownername: author, datetaken, tags, url_o: link, url_n: thumbnail } = this.props.item;

        return (
            <div className="card">
                <div className="thumbnail">
                    <img src={thumbnail} />
                </div>
                <div className="details">
                    <div className="item">
                        <span className="label">Author:</span>
                        <span className="value">{author}</span>
                    </div>
                    <div className="item">
                        <span className="label">Date taken:</span>
                        <span className="value">{formatTimestamp(datetaken)}</span>
                    </div>
                    <div className="item">
                        <span className="label">Tags:</span>
                        <span className="value">{formatTags(tags)}</span>
                    </div>
                </div>
                <div className="button">
                    {link && (
                        <a className="link" href={link} target="_blank">
                            Open Image
                        </a>
                    )}
                    {!link && (
                        <div className="link">
                            (Original Image Not Available)
                        </div>
                    )}

                </div>
            </div>
        )
    }
}

export default Card;