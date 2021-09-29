import React from "react";
import "./MoodTracker.scss";

const SaveButton = ({
    selectedMood,
    setSelectedMood,
    setMoodHistory
}) => {

    const formatDate = (date) => {
        // this convert the date to the required format and replaces single digits to double digits
        return `${('0' + date.getDate()).slice(-2)}-${('0' + date.getMonth()).slice(-2)}-${date.getFullYear()} / ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
    }

    return (
        <button disabled={!selectedMood} className={`button ${selectedMood ? "button--active" : "button--unactive"}`}
            onClick={() => {
                setSelectedMood(null);
                let date = new Date();
                let item = selectedMood;
                item.date = formatDate(date);

                setMoodHistory(previousState => {
                    return [item, ...previousState];
                })

            }}
        >
            {"Save mood"}
        </button>

    )
}

export default SaveButton;