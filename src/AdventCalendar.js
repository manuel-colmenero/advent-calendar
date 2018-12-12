import React, { Component } from "react";
import * as storage from "./storage";
import Lock from "./Lock";

const DAYS = 24;
const TODAY = (new Date()).getDate();

const getArray = (value = 0) => (new Array(DAYS)).fill(value);

const getRandomDays = () => getArray()
  .map((n, i) => i + 1)
  .sort((a, b) => Math.random() > 0.5);

const isLocked = day => day > TODAY;

export default class AdventCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = storage.load({
      days: getRandomDays(),
      visited: getArray(false),
      images: [],
    });
  }

  onDayClick(day, index) {
    if (isLocked(day)) {
      return;
    }
    this.setState(state => ({
      visited: state.visited.map((x, i) => i === index ? !x : x),
    }));
  }

  getSubreddit() {
    if (window.location.hash) {
      return window.location.hash.replace(/#/, "");
    }

    return "earthporn";
  }

  fetchImages(after = null) {
    if (this.state.images.length >= DAYS) {
      return;
    }

    const subreddit = this.getSubreddit();
    const url = `https://www.reddit.com/r/${subreddit}/top/.json?t=all&limit=100&after=${after}`;

    fetch(url)
      .then(r => r.json())
      .then(response => {
        const images = response.data.children
          .map(child => child.data.url)
          .filter(url => /\.(jpe?g|png|gif)$/i.test(url));

        this.setState(
          state => ({
            images: [...state.images, ...images],
          }),
          () => {
            this.fetchImages();
          }
        );
      });
  }

  componentDidUpdate() {
    storage.save(this.state);
  }

  componentDidMount() {
    this.fetchImages();
    window.addEventListener("hashchange", () => {
      this.setState(
        state => ({
          images: [],
          visited: getArray(false),
        }),
        () => {
          this.fetchImages();
        }
      );
    });
  }

  render() {
    return (
      <div className="calendar">
        {this.state.days.map((day, i) => (
          <div
            key={i}
            className="day"
            data-open={this.state.visited[i]}
            data-locked={isLocked(day)}
            onClick={() => this.onDayClick(day, i)}
          >
            <div
                className="day__backside"
                style={{ backgroundImage: this.state.images[i] ? `url(${this.state.images[i]})` : null }}
            />
            {day}
            {isLocked(day) ?  <Lock /> : null}
          </div>
        ))}
      </div>
    );
  }
}
