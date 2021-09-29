import React from "react";
import "./MoodTracker.scss";

const SaveButton = ({
    selectedMood,
    setSelectedMood,
    setMoodHistory
}) => {
    return (
        <button disabled={!selectedMood} className={`button ${selectedMood ? "button--active" : "button--unactive"}`}
            onClick={() => {
                setSelectedMood(null);
                let item = selectedMood;
                item.date = new Date();

                setMoodHistory(previousState => {
                    return [item, ...previousState];
                });

            }}
        >
            {"Save mood"}
        </button>

    )
}

export default SaveButton;