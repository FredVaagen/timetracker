import React from "react";
import { useState, useEffect } from "react";
import card from "../styles/Card.module.css";
import dashboard from "../styles/Dashboard.module.css";
import colors from "../styles/Colors.module.css";

function Timetracker({ data }) {
  const join = (...classNames) => classNames.join(" ");
  const [toggleOverview, setToggleOverview] = useState("daily");

  let current;
  let previous;

  let colorBanner;
  let imageBanner;
  let dailyActive;
  let weeklyActive;
  let monthlyActive;

  function toggleDaily() {
    setToggleOverview("daily");
  }

  function toggleWeekly() {
    setToggleOverview("weekly");
  }

  function toggleMonthly() {
    setToggleOverview("monthly");
  }

  if (toggleOverview == "daily") {
    dailyActive = dashboard.active;
  }
  if (toggleOverview == "weekly") {
    weeklyActive = dashboard.active;
  }
  if (toggleOverview == "monthly") {
    monthlyActive = dashboard.active;
  }

  return (
    <>
      <div className={join(dashboard.container, colors.dark_blue)}>
        <div className={join(dashboard.dashboard_top, colors.blue)}>
          <div className={dashboard.dashboard_top_inner}>
            <img src="/images/image-jeremy.png" />
            <div className={dashboard.dashboard_top_textContainer}>
              <p>Report for</p>
              <h1>Jeremy Rob</h1>
            </div>
          </div>
        </div>
        <div className={join(dashboard.dashboard_bottom)}>
          <ul>
            <li
              className={
                dailyActive
                  ? join(dashboard.dashboard_bottom_list, dashboard.active)
                  : join(dashboard.dashboard_bottom_list)
              }
              onClick={toggleDaily}
            >
              Daily
            </li>
            <li
              className={
                weeklyActive
                  ? join(dashboard.dashboard_bottom_list, dashboard.active)
                  : join(dashboard.dashboard_bottom_list)
              }
              onClick={toggleWeekly}
            >
              Weekly
            </li>
            <li
              className={
                monthlyActive
                  ? join(dashboard.dashboard_bottom_list, dashboard.active)
                  : join(dashboard.dashboard_bottom_list)
              }
              onClick={toggleMonthly}
            >
              Monthly
            </li>
          </ul>
        </div>
      </div>
      <div className={card.container}>
        {data.map((data) => {
          if (data.title == "Work") {
            colorBanner = colors.work;
            imageBanner = "/images/icon-work.svg";
          } else if (data.title == "Play") {
            colorBanner = colors.play;
            imageBanner = "/images/icon-play.svg";
          } else if (data.title == "Study") {
            colorBanner = colors.study;
            imageBanner = "/images/icon-study.svg";
          } else if (data.title == "Exercise") {
            colorBanner = colors.exercise;
            imageBanner = "/images/icon-exercise.svg";
          } else if (data.title == "Social") {
            colorBanner = colors.social;
            imageBanner = "/images/icon-social.svg";
          } else if (data.title == "Self Care") {
            colorBanner = colors.self_care;
            imageBanner = "/images/icon-self-care.svg";
          }

          const dailyCurrent = data.timeframes.daily.current;
          const dailyPrevious =
            "Yesterday" + " " + "-" + " " + data.timeframes.daily.previous;

          const weeklyCurrent = data.timeframes.weekly.current;
          const weeklyPrevious =
            "Last Week" + " " + "-" + " " + data.timeframes.weekly.previous;

          const monthlyCurrent = data.timeframes.monthly.current;
          const monthlyPrevious =
            "Last Month" + " " + "-" + " " + data.timeframes.monthly.previous;

          if (toggleOverview == "daily") {
            current = dailyCurrent;
            previous = dailyPrevious;
          } else if (toggleOverview == "weekly") {
            current = weeklyCurrent;
            previous = weeklyPrevious;
          } else if (toggleOverview == "monthly") {
            current = monthlyCurrent;
            previous = monthlyPrevious;
          }

          return (
            <div key={data.title} className={join(card.card)}>
              <div className={join(card.card_banner, colorBanner)}>
                <img src={imageBanner} />
              </div>
              <div className={join(card.card_content, colors.dark_blue)}>
                <div className={card.card_content_name}>
                  <h3>{data.title}</h3>
                  <p>
                    <img className={card.card_ellipsis} src="/images/icon-ellipsis.svg" />
                  </p>
                </div>
                <div className={card.card_content_hours}>
                  <div className={card.card_content_hours_current}>
                    {current}hrs
                  </div>
                  <div className={card.card_content_hours_previous}>
                    {previous}hrs
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Timetracker;
