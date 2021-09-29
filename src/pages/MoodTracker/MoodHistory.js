import React from "react";
import "./MoodTracker.scss";

const MoodHistory = ({
    moodHistory
}) => {
    return (
        <div className="column">

            {moodHistory.map((item, key) =>
                <div key={key} className={`card card--items-history 
                            ${item?.id === 1 ? 'card--item-border-red' :
                        item?.id === 2 ? 'card--item-border-orange' :
                            item?.id === 3 && 'card--item-border-green'}
                            `}>

                    <div className="row image image__catbackground">
                        <div className="container">
                            <div className={`container container__emoji-filled
                                        ${item?.id === 1 ? 'container--emoji-fill-red' :
                                    item?.id === 2 ? 'container--emoji-fill-orange' :
                                        item?.id === 3 && 'container--emoji-fill-green'}
                                        `}>
                                {item.emoji}
                            </div>

                            <div className="column">
                                <div className={`text text__title 
                                             ${item?.id === 1 ? 'text--red' :
                                        item?.id === 2 ? 'text--orange' :
                                            item?.id === 3 && 'text--green'}
                                            `}>
                                    {item.text}
                                </div>
                                <time className="text text__date text--gray">
                                    {item.date}
                                </time>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MoodHistory;