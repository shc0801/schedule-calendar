import React, {
  ReactElement,
  useMemo,
  useCallback,
  useEffect
} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { setSelectedDate } from "../../../../modules/actions";
import { RootState } from "../../../../modules/reducer";

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
`

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
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    transition: .2s;

    border-radius: 50%;

    content: '';
  }
`

interface Props { }

const CalendarDate: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { schedulerDate } = useSelector((state: RootState) => state.schedule);

  const handleClickDate = (target: HTMLDivElement) => {
    const id = target.dataset.id;
    const classList = target.classList;
    const children = target.parentNode.children;

    if (classList.contains("selected")) {
      dispatch(setSelectedDate({ date: "" }));
      classList.remove("selected");
      return;
    }

    Array.from(children).map(el => {
      el.classList.remove("selected");
    });

    dispatch(setSelectedDate({ date: id }));
    classList.add("selected");
  };

  const getDateJSX = (
    children: number,
    id: string = "",
    styling: string = ""
  ): ReactElement => {
    if (!styling) {
      return (
        <CalendarDateText key={id} className={styling}>{children}</CalendarDateText>
      );
    }

    return (
      <CalendarDateText key={id}
        data-id={id}
        className={styling}
        onClick={e => handleClickDate(e.currentTarget)}>{children}</CalendarDateText>
    );
  };

  const printCalendar = useCallback((): ReactElement[] => {
    const yearCopy = schedulerDate.getFullYear();
    const monthCopy = schedulerDate.getMonth() + 1;
    const fixedMonth = monthCopy;
    const lastDay = new Date(yearCopy, monthCopy, 0).getDate();
    const firstDay = new Date(yearCopy, monthCopy - 1, 1).getDay();
    const jsx: ReactElement[] = [];
    let startDayCount = 1;
    let nextDayCount = 1;

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
  }, [schedulerDate]);

  const memoizedCalendar = useMemo<ReactElement[]>(() => {
    return printCalendar();
  }, [schedulerDate]);

  useEffect(() => {
    return () => {
      dispatch(setSelectedDate({ date: "" }));
    };
  }, []);

  return (
    <CalendarDateContainer>
      {memoizedCalendar}
    </CalendarDateContainer>
  );
};

export default CalendarDate;
