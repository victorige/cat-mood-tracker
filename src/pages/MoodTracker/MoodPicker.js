import React from "react";
import "./MoodTracker.scss";

const MoodPicker = ({
    moods,
    selectedMood,
    setSelectedMood
}) => {
    return (
        <div className="row">
            {moods.map((item, key) =>
                <div key={key}
                    className={`container container__emoji ${selectedMood?.id === item.id
                        && `${selectedMood?.id === 1 ? 'container--emoji-fill-red' :
                            selectedMood?.id === 2 ? 'container--emoji-fill-orange' :
                                selectedMood?.id === 3 && 'container--emoji-fill-green'
                        }`}`}
                    onClick={() => setSelectedMood(item)}>
                    {item.emoji}
                </div>
            )}
        </div>
    );
}

export default MoodPicker;