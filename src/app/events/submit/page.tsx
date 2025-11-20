const EventSubmitPage = async () => {
  return (
    <article className="noscroll" style={{ width: "min(100vw, 800px)" }}>
      <h2 className="pageheader">Submit an Event</h2>
      <iframe
        src="https://airtable.com/embed/appAd7ThDyM8svDka/pagzwbfG2pvCQermX/form"
        frameBorder="0"
        // onmousewheel=""
        width="100%"
        height="1500"
        style={{ background: "transparent", border: "none" }}
      ></iframe>
    </article>
  );
};

export default EventSubmitPage;
