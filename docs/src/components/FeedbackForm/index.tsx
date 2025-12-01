import React, {useState} from 'react';
import styles from './styles.module.css';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Feedback submitted: ${feedback}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.feedbackForm}>
        <h3>Thank you for your feedback!</h3>
      </div>
    );
  }

  return (
    <div className={styles.feedbackForm}>
      <h3>Was this page helpful?</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.feedbackTextarea}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Let us know how we can improve this page."
        />
        <button type="submit" className="button button--primary">
          Submit
        </button>
      </form>
    </div>
  );
}
