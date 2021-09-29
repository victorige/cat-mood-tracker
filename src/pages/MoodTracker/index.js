import React, { useState } from "react";
import "./MoodTracker.scss";
import catLogo from "../../images/catLogo.png";
import catLogoGrayScale from "../../images/catLogoGrayScale.png";
import { moods } from "../../utlis/moods";
import MoodPicker from "./MoodPicker";
import MoodText from "./MoodText";
import SaveButton from "./SaveButton";
import MoodHistory from "./MoodHistory";

const MoodTracker = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [moodHistory, setMoodHistory] = useState([]);

    return (
        <main>
            <section className="section section__left">
                <div className="card card--mood-picker">
                    <img src={catLogo} className="image image--mood-picker" alt="catLogo" />
                    <div className="text__question text--grey">
                        What is your cat’s <br /> current mood?
                    </div>

                    <MoodPicker moods={moods()} selectedMood={selectedMood} setSelectedMood={setSelectedMood} />

                    {selectedMood && <MoodText selectedMood={selectedMood} />}

                    <SaveButton
                        selectedMood={selectedMood}
                        setSelectedMood={setSelectedMood}
                        setMoodHistory={setMoodHistory} />

                </div>
            </section>


            <section className="section section__right">
                <div className="row">
                    <img src={catLogo} className="image image--history" alt="catLogo" />
                    <header className="text text__header">
                        {"Cat mood tracker™"}
                    </header>
                </div>

                <div className="text text__mood-history">
                    {"MOOD HISTORY"}
                    <br />
                </div>

                {moodHistory.length === 0 ?
                    <div className="card card--no-history">
                        <img className="image image--grayscale" src={catLogoGrayScale} alt="cat logo grayscale" />
                        <div className="text text__no-history">
                            No mood history <br /> to show yet
                        </div>
                    </div> : <MoodHistory moodHistory={moodHistory} />
                }
            </section>
        </main>
    );
}

export default MoodTracker;