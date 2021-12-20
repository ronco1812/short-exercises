import Message from "./Message";

export default function MsgArea(props) {
  const { messages } = props;
  return (
    <div>
      {messages.map((message) => {
        return (
          <Message
            username={message.username}
            content={message.content}
            date={message.date}
          />
        );
      })}
    </div>
  );
}