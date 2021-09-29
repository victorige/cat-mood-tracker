import React from "react";
import "./MoodTracker.scss";

const MoodText = ({
    selectedMood
}) => {
    return (
        <div className={`text text__mood-picker ${selectedMood?.id === 1 ? 'text--red' :
            selectedMood?.id === 2 ? 'text--orange' :
                selectedMood?.id === 3 && 'text--green'
            }`}>
            {selectedMood.text}
        </div>
    )
}

export default MoodText;