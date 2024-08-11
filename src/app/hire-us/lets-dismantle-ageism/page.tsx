import styles from "./../page.module.css";

const LetsDismantleAgeismPage = () => {
  return (
    <article className={styles.hireUs}>
      <h2 className="pageHeader">Let’s Dismantle Ageism</h2>
      <section>
        <h3>Workshop Description:</h3>
        <p>
          Designed for people of all ages and in all walks of life, this
          workshop raises awareness of what ageism is, how it appears in our
          lives, and what each of us can do to dismantle it. During our time
          together, you’ll see what it’s like to take or teach a workshop, and
          come away with all the tools you need to host your own.
        </p>

        <h3>Time:</h3>
        <p>
          The workshop can be done in an hour. We like to have 1.5 hours if
          possible to allow for robust interaction and conversation. If you want
          a Q&A as well we recommend scheduling 2 hours. For groups with more
          existing awareness of bias the Q&As frequently turn into rich
          conversations where we all learn from each other.
        </p>
        <h3>Budget:</h3>
        <p>
          Presentations like these fund the other work OldSchool does. Our fee
          for a 90-minute recorded workshop is $3000. Our fee for a half-day
          recorded workshop is $4500.The recording is yours to share in
          perpetuity. However, we never want cost to be a barrier. If this fee
          is not accessible, tell us what your budget is and we’ll modify an
          offering to fit within it.
        </p>
        <hr />

        <p>
          What other questions can I answer? If you want to jump on a call,
          suggest a few times that work for you and I’ll do my best to
          accommodate. Or you can always stop by during our weekly{" "}
          <a href="https://us02web.zoom.us/meeting/register/tZAvcOivqzkpG9CtqpP6cnaL64TnxKaY_fAg?_x_zm_rtaid=YiPF4Z6zTlaqkFLyDVWmEg.1642791884212.a1f026948d09da14ace823c2dd46fdb8&_x_zm_rhtaid=774">
            office hours sessions
          </a>{" "}
          every Wednesday from 1:30-2:30 ET on zoom and I can pop off into a
          breakout room with you.{" "}
          <a href="https://us02web.zoom.us/j/84271752314?pwd=cXRYZjZVdFdLbWsvSFFxMDlrb2ZDUT09">
            This link
          </a>{" "}
          will take you to a registration form.
        </p>
        <p>
          To access a list of other people we recommend who speak about age
          equity, you can find that{" "}
          <a href="https://airtable.com/appfRSN7ubm4ALjoc/shrXjNJntfcMN4ysr/tblRZRxhVddepqs7T">
            here
          </a>
          .
        </p>
      </section>
    </article>
  );
};

export default LetsDismantleAgeismPage;
