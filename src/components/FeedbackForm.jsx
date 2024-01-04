import {useState} from "react";

const FeedbackForm = () => {

    const [rating, setRating] = useState("10")
    const [comment, setComment] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Number(rating) <= 5 && comment.length <= 10) {
            alert("Please provide a comment explaining why the experience was poor")
            return
        }
        console.log("submitted")
        setRating("10")
        setComment("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Feedback Form</h2>
                <div>
                    <label htmlFor="rating">Rating: {rating}</label>
                    <input
                        id="rating"
                        name="rating"
                        type="range"
                        min="0"
                        max="0"
                        value={rating}
                        onChange={e=>setRating(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment: </label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={comment}
                        onChange={e=>setComment(e.target.value)}
                    ></textarea>
                </div>
            </fieldset>
        </form>
    );
};

export default FeedbackForm;