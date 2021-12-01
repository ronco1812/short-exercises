export default function Message(props) {
    const { username, content, date } = props;
    return (
      <span>
        <cite>{username}</cite>
        <p>{content}</p>
        <small>{date}</small>
      </span>
    );
  }