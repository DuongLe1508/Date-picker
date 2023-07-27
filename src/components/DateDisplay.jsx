import moment from "moment/moment";

export default function DateDisplay(props) {
  const { date } = props;
  const newDate = new Date(date);

  const formatDate = moment(newDate).format("LL");
  return <section className="text-3xl">{`My date is: ${formatDate} `}</section>;
}
