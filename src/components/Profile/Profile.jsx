import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.userProfile}>
            <div className={css.userData}>
                <img className={css.avatar} src={image} alt={name} />
                <p className={css.name}>{name}</p>
                <p className={css.data}>@{tag}</p>
                <p className={css.data}>{location}</p>
            </div>

            <ul className={css.statsList}>
                <li className={css.statsItem}>
                    <span>Followers</span>
                    <span className={css.count}>{ stats.followers }</span>
                </li>
                <li className={css.statsItem}>
                    <span>Views</span>
                    <span className={css.count}>{stats.views}</span>
                </li>
                <li className={css.statsItem}>
                    <span>Likes</span>
                    <span className={css.count}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;