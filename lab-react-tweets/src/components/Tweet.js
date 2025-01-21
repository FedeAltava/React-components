import { Actions } from "./Actions";
import { Message } from "./Message";
import { User } from "./User";

function Tweet(props) {
  const { tweet } = props;
  return (
    <div className="tweet">
      <img src={tweet.user.image} className="profile" alt="profile" />

      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <span className="timestamp">{tweet.timestamp}</span>
        </div>

        <Message messagey={tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
