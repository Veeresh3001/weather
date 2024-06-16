import { Component } from "react";
import "./App.css";

import {
  MainCard,
  HeaderCard,
  SearchInp,
  ModeButton,
  LogoHead,
  CityName,
  WeatherData,
  TempCard,
  Degree,
  TextEl,
  SpanEl,
  TempEl,
} from "./style";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const d = new Date("2021-03-25");
// let month = months[d.getMonth()];

class App extends Component {
  state = {
    darkMode: false,
    details: {
      dataTime: new Date(),
      name: "Kurnool",
      temperature: 304.92,
      temperature_max: 304.92,
      temperature_min: 304.92,
      weather: [
        {
          description: "overcast clouds",
          icon: "04d",
          id: 804,
          main: "Clouds",
        },
      ],
    },
    searchInp: "",
    getDataFailure: false,
    failureData: {},
  };

  onChangeMode = () => {
    this.setState((prev) => ({ darkMode: !prev.darkMode }));
  };

  onChangeInput = (eve) => {
    this.setState({ searchInp: eve.target.value });
  };

  onKeyDownEnter = async (eve) => {
    const { searchInp } = this.state;
    let serarchVal = searchInp === "" ? "Kurnool" : searchInp;

    const apikey = "e5e2c6912ad8ab08aada7f07e7cf33e8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${serarchVal}&appid=${apikey}`;

    if (!isNaN(searchInp) && searchInp !== "") {
      let zipCode = parseInt(searchInp);
      url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apikey}`;
    }

    if (eve.key === "Enter") {
      const response = await fetch(url);

      const data = await response.json();

      if (response.ok === true) {
        const resData = {
          name: data.name,
          temperature: data.main.temp,
          temperature_max: data.main.temp_max,
          temperature_min: data.main.temp_min,
          dataTime: new Date(),
          weather: data.weather,
        };
        // console.log(resData);
        this.setState({ details: resData, getDataFailure: false });
      } else {
        this.setState({ getDataFailure: true, failureData: data });
      }
    }
  };

  render() {
    const { darkMode, searchInp, details, getDataFailure, failureData } =
      this.state;

    const modeChange = darkMode.toString();

    const { name, temperature, dataTime, temperature_min, temperature_max } =
      details;

    return (
      <MainCard mode={modeChange}>
        <HeaderCard mode={modeChange}>
          <LogoHead mode={modeChange}>Weather</LogoHead>
          <SearchInp
            mode={modeChange}
            type="search"
            onChange={this.onChangeInput}
            onKeyDown={this.onKeyDownEnter}
            value={searchInp}
            placeholder="search city name or ZIP Code"
            name="search"
          />
          <ModeButton
            mode={modeChange}
            onClick={this.onChangeMode}
            type="button"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </ModeButton>
        </HeaderCard>
        <WeatherData mode={modeChange}>
          {getDataFailure ? (
            <div className="failure">
              <h1>{failureData.cod}</h1>
              <p>{failureData.message}</p>
            </div>
          ) : (
            <div>
              <CityName mode={modeChange}>
                City: <span>{name}</span>
              </CityName>
              <TempCard mode={modeChange}>
                <img
                  src={`https://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
                  alt={details.weather[0].description}
                />
                <TempEl mode={modeChange}>
                  {Math.round(temperature / 10)}
                  <Degree>°C</Degree>
                </TempEl>
              </TempCard>
              <TextEl mode={modeChange}>
                <SpanEl mode={modeChange}>Cloudy </SpanEl>
                {`${Math.round(temperature_max / 10)}/ ${Math.round(
                  temperature_min / 10
                )}`}
              </TextEl>
              <TextEl mode={modeChange}>
                <SpanEl mode={modeChange}>Time:- </SpanEl>
                {`${dataTime.getHours()}:${dataTime.getMinutes()}`}
              </TextEl>
              <TextEl mode={modeChange}>
                <SpanEl mode={modeChange}>Date:- </SpanEl>
                {`${dataTime.getDate()}/${
                  months[dataTime.getMonth()]
                }/${dataTime.getFullYear()}`}
              </TextEl>
            </div>
          )}
        </WeatherData>
      </MainCard>
    );
  }
}

export default App;
