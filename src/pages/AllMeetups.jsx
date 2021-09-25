import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  // useState returns an array where first element is current state snapshot and second element is a function for updating the state
  // Initially we set to true so we start in a loading state and set it to false when we have the data
  const [isLoading, setIsLoading] = useState(true);

  // Initially we send the empty list but later we want to override data that we fetched from the API
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // Whenever we call state updating function (second element of useState), we tell react to re-execute this component function
  // And re-evalute and return updated JSX code. This make inifite loop and breaks application
  // To prevent this situation we use useEffect, it takes two arguments i.e an anonymous function and list of dependencies
  // This effect function will be executed by React on our behalf but only under certain conditions
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetups-ec3f8-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false); // When data is fetched from API, we want to stop loading
        setLoadedMeetups(meetups); // We want to display loaded data
      });
  }, []); // We gave empty list to second argument as this will run the effect function only once wehn this page is loaded forst time

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
