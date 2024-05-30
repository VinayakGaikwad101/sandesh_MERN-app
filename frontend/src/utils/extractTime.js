import { format } from "date-fns-tz";

const extractTime = (dateString) => {
  const date = new Date(dateString);

  const istDate = format(date, "h:mm a", { timeZone: "Asia/Kolkata" });

  return istDate;
};

export default extractTime;
