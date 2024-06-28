import clsx from 'clsx';
import css from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={css.item}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p
                className={clsx(css.status, isOnline ? css.online : css.offline)}>
                {isOnline ? 'Online' : 'Offline'}
            </p>            
        </div>
    )
}

export default FriendListItem;
