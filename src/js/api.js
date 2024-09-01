import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { baserUrl } from "./baseURL";

const ApiContext = createContext();
function EventProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [tickerTape, settickerTape] = useState([]);
  const [playGame, setPlayGame] = useState([]);

  const [beansTotalSendCurrent, setbeansTotalSendCurrent] = useState([]);
  const [beansTotalSendPrevious, setbeansTotalSendPrevious] = useState([]);
  const [beansTotalReceivedCurrent, setbeansTotalReceivedCurrent] = useState(
    []
  );
  const [beansTotalReceivedPrevious, setbeansTotalReceivedPrevious] = useState(
    []
  );
  const [beansDailySendCurrent, setbeansDailySendCurrent] = useState([]);
  const [beansDailySendPrevious, setbeansDailySendPrevious] = useState([]);
  const [beansDailyReceivedCurrent, setbeansDailyReceivedCurrent] = useState(
    []
  );
  const [beansDailyReceivedPrevious, setbeansDailyReceivedPrevious] = useState(
    []
  );
  const [beansHourlySendCurrent, setbeansHourlySendCurrent] = useState([]);
  const [beansHourlySendPrevious, setbeansHourlySendPrevious] = useState([]);
  const [beansHourlyReceivedCurrent, setbeansHourlyReceivedCurrent] = useState(
    []
  );

  const [beansHourlyReceivedPrevious, setbeansHourlyReceivedPrevious] =
    useState([]);

  const [user, setUser] = useState({
    id: 0,
    uid: 0,
    token: undefined,
  });

  const refreshApi = () => {
    setRefresh(!refresh);
  };
  const isLive = false;
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const nowDate = `${year}-${month}-${day}`;
  currentDate.setDate(currentDate.getDate() - 1);
  const prevYear = currentDate.getFullYear();
  const prevMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const prevDay = String(currentDate.getDate()).padStart(2, "0");
  const PrevDate = `${prevYear}-${prevMonth}-${prevDay}`;
  useEffect(() => {
    try {
      // window.phone.getUserInfo(function (userInfo) {
      //   setUser({
      //     uid: userInfo.userId > 0 ? userInfo.userId : 0,
      //     token: userInfo.token !== "" ? userInfo.token : null,
      //   });
      // });
      setUser({
        uid: 596492375,
        token: "A153AFDD81C05C43D2B229A17936229B01",
      });
    } catch (_error) {
      setUser({
        uid: 0,
        token: "",
      });
      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (user.uid > 0) {
      axios
        .get(`${baserUrl}api/activity/tile/getUserEventInfo?userId=${user.uid}`)
        .then((response) => {
          setUserInfo(response.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user, refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20240422_tile&rankIndex=1&pageNum=1&pageSize=20`
      )
      .then((response) => {
        settickerTape(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=11&pageNum=1&pageSize=20&dayIndex=${nowDate}`
      )
      .then((response) => {
        setbeansTotalSendCurrent(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=11&pageNum=1&pageSize=20&dayIndex=${PrevDate}`
      )
      .then((response) => {
        setbeansTotalSendPrevious(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=12&pageNum=1&pageSize=20&dayIndex=${nowDate}`
      )
      .then((response) => {
        setbeansTotalReceivedCurrent(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=12&pageNum=1&pageSize=20&dayIndex=${PrevDate}`
      )
      .then((response) => {
        setbeansTotalReceivedPrevious(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${nowDate}`
      )
      .then((response) => {
        setbeansDailySendCurrent(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${PrevDate}`
      )
      .then((response) => {
        setbeansDailySendPrevious(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${nowDate}`
      )
      .then((response) => {
        setbeansDailyReceivedCurrent(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${PrevDate}`
      )
      .then((response) => {
        setbeansDailyReceivedPrevious(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=15&pageNum=1&pageSize=20&dayIndex=${nowDate}`
      )
      .then((response) => {
        setbeansHourlySendCurrent(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=15&pageNum=1&pageSize=20&dayIndex=${PrevDate}`
      )
      .then((response) => {
        setbeansHourlySendPrevious(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=16&pageNum=1&pageSize=20&dayIndex=${nowDate}`
      )
      .then((response) => {
        setbeansHourlyReceivedCurrent(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=16&pageNum=1&pageSize=20&dayIndex=${PrevDate}`
      )
      .then((response) => {
        setbeansHourlyReceivedPrevious(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div>
      <ApiContext.Provider
        value={{
          isLoading,
          setIsLoading,
          refreshApi,
          userId: user.uid,
          userToken: user.token,
          userInfo: userInfo?.data,
          tickerTape: tickerTape?.data,
          beansTotalSendCurrent: beansTotalSendCurrent?.data,
          beansTotalSendPrevious: beansTotalSendPrevious?.data,
          beansTotalReceivedCurrent: beansTotalReceivedCurrent?.data,
          beansTotalReceivedPrevious: beansTotalReceivedPrevious?.data,
          beansDailySendCurrent: beansDailySendCurrent?.data,
          beansDailySendPrevious: beansDailySendPrevious?.data,
          beansDailyReceivedCurrent: beansDailyReceivedCurrent?.data,
          beansDailyReceivedPrevious: beansDailyReceivedPrevious?.data,
          beansHourlySendCurrent: beansHourlySendCurrent?.data,
          beansHourlySendPrevious: beansHourlySendPrevious?.data,
          beansHourlyReceivedCurrent: beansHourlyReceivedCurrent?.data,
          beansHourlyReceivedPrevious: beansHourlyReceivedPrevious?.data,
          playGame: playGame?.data,

          isLive,
        }}
      >
        {children}
      </ApiContext.Provider>
    </div>
  );
}

export { ApiContext, EventProvider };
