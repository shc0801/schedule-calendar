import React, { ReactElement, useMemo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Api from "../../../apis";

import { setSelectedDate } from "../../../modules/actions";
import { RootState } from "../../../modules/reducer";

const CalendarDateContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  & > .curr {
    color: #9c9c9c;
    cursor: pointer;
  }

  & > .selected {
    color: #fff;
  }
  & > .selected::before {
    background-color: #6d6ec7;
  }
`;

const CalendarDateText = styled.div`
  width: calc(100% / 7);

  font-size: 1.7em;
  font-weight: bold;
  color: #e0e0e0;
  text-align: center;
  line-height: 85px;

  position: relative;

  &::before {
    width: 50px;
    height: 50px;
    background-color: #fff;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    transition: 0.2s;

    border-radius: 50%;

    content: "";
  }

  & > div {
    width: 10px;
    height: 10px;

    position: absolute;
    bottom: 0;

    border-radius: 50%;
  }
  & > div:nth-child(1) {
    background-color: #faa;
    left: 28%;
  }
  & > div:nth-child(2) {
    background-color: #afa;
    left: calc(28% + 20px);
  }
  & > div:nth-child(3) {
    background-color: #aaf;
    left: calc(28% + 40px);
  }
`;

interface Props {}

const CalendarDate: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { schedulerDate } = useSelector(
    (state: RootState) => state.schedule
  );

  const printCalendar = useCallback((): ReactElement[] => {
    const yearCopy = schedulerDate.getFullYear();
    const monthCopy = schedulerDate.getMonth() + 1;
    const fixedMonth = monthCopy;
    const lastDay = new Date(yearCopy, monthCopy, 0).getDate();
    const firstDay = new Date(yearCopy, monthCopy - 1, 1).getDay();
    const jsx: ReactElement[] = [];
    let startDayCount = 1;
    let nextDayCount = 1;

    Api.post("/get/schedule")
      .then((res) => {
        window.localStorage.setItem("schedules", JSON.stringify(res.data.result));
      })
      .catch((err) => {
        throw err;
      });

    const getDateJSX = (
      children: number,
      id: string = "",
      styling: string = ""
    ): ReactElement => {
      const user = JSON.parse(window.localStorage.getItem("user")) === null ? {user_id: ""} : JSON.parse(window.localStorage.getItem("user"))[0];
      const schedules = JSON.parse(window.localStorage.getItem("schedules"))
      let count = 0;
      schedules.forEach((item) => {
        const { year, month, day, user_id } = item;
        if (startDayCount === day && yearCopy === year && monthCopy === month && user_id === user.user_id) {
          count++;
        }
      });
      const makeCircle = (): ReactElement[] => {
        let result = [];
        for (let i = 0; i < count; i++) {
          result.push(<div key={i}></div>);
        }
        return result;
      };

      if (!styling) {
        return (
          <CalendarDateText key={id} className={styling}>
            {children}
          </CalendarDateText>
        );
      }

      return (
        <CalendarDateText
          key={id}
          data-id={id}
          className={styling}
          onClick={(e) => handleClickDate(e.currentTarget)}
        >
          {children}
          {makeCircle()}
        </CalendarDateText>
      );
    };

    const handleClickDate = (target: HTMLDivElement) => {
      const id = target.dataset.id;
      const classList = target.classList;
      const children = target.parentNode.children;

      if (classList.contains("selected")) {
        dispatch(setSelectedDate({ date: "" }));
        classList.remove("selected");
        return;
      }

      Array.from(children).forEach((el) => {
        el.classList.remove("selected");
      });

      dispatch(setSelectedDate({ date: id }));
      classList.add("selected");
    };

    for (let i = 0; i < 6; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDay) {
          const prevLastDate = new Date(yearCopy, monthCopy - 1, 0).getDate();

          jsx.push(getDateJSX(prevLastDate - firstDay + j + 1, `${j}`));
        } else if (i >= 0 && startDayCount <= lastDay) {
          const date = `${yearCopy}-${fixedMonth}-${startDayCount}`;
          const t = new Date();
          const y = t.getFullYear();
          const m = t.getMonth() + 1;
          const d = t.getDate();

          date === `${y}-${m}-${d}`
            ? jsx.push(getDateJSX(startDayCount, date, "curr today"))
            : jsx.push(getDateJSX(startDayCount, date, "curr"));
          startDayCount += 1;
        } else {
          const date: string =
            +fixedMonth + 1 > 12
              ? `${+yearCopy + 1}-${1}-${nextDayCount}`
              : `${yearCopy}-${+fixedMonth + 1}-${nextDayCount}`;

          jsx.push(getDateJSX(nextDayCount, date));
          nextDayCount += 1;
        }
      }
    }
    return jsx;
  }, [schedulerDate, dispatch]);

  const memoizedCalendar = useMemo<ReactElement[]>(() => {
    return printCalendar();
  }, [printCalendar]);

  useEffect(() => {
    return () => {
      dispatch(setSelectedDate({ date: "" }));
    };
  }, [dispatch]);

  return <CalendarDateContainer>{memoizedCalendar}</CalendarDateContainer>;
};

export default CalendarDate;
