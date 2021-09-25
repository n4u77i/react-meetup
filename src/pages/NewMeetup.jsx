import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory(); // Function to manipulate browser history like navigation

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetups-ec3f8-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/"); // Navigates back to page but we can't press back buton then
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddNewMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
