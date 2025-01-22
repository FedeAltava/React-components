import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import TimeStamp from "./Timestamp";
import User from "./User";


function Tweet(props) {
  const { tweet } = props;
  return (
    <div className="tweet">
      <ProfileImage profileImage={tweet.user.image} />
      <div className="body">
        
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <TimeStamp timeStamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />
        <Actions />
      </div>

      
    </div>
  );
}

export default Tweet;
