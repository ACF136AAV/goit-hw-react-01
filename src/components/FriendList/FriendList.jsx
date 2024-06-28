import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({friends}) {
    return (
        <ul className={css.listFriends}>
            {friends.map(({ avatar, id, name, isOnline }) => (
                <li key={id}>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                </li>
            ))}
        </ul>
    )
}

export default FriendList;