const screen = document.getElementsByClassName("screen");
const button = document.getElementsByClassName("button");
const dateTime1 = document.getElementsByClassName("dateTime1");
const dateTime2 = document.getElementsByClassName("dateTime2");

button[0].addEventListener("click", (event) => {
  screen[0].value = "Loading....";

  const inputValue = screen[0].value;

  let userInputOne = dateTime1[0].value;
  let userInputTwo = dateTime2[0].value;

  userInputOne = moment(userInputOne).format("YYYY-MM-DD");
  userInputTwo = moment(userInputTwo).format("YYYY-MM-DD");

  axios({
    url: "https://api.nasa.gov/neo/rest/v1/feed",
    method: "GET",
    params: {
      api_key: "BQe2N8xkvkc6Xr5g6XDch3OmUTELYpxh7dlTqQ1e",
      start_date: userInputOne,
      end_date: userInputTwo,
    },
  })
    .then((response) => {
      const { data } = response;

      console.log(
        data.near_earth_objects["2015-09-08"][0].estimated_diameter
          .kilometers
      );
      screen[0].value =
        "The size of Asteriods near to earth" +
        data.near_earth_objects["2015-09-08"][0].estimated_diameter.kilometers;
    })
    .catch((error) => {
      console.log(error);
    });
});

// "The size of Asteriods near to earth" + data.near_earth_objects"2015-09-08"[0].estimated_diameter.kilometers;
