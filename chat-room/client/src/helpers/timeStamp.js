export default function getTimeStamp() {
    const dateString = new Date().toLocaleTimeString().split(":");
    return dateString[0] + ":" + dateString[1];
  }
  