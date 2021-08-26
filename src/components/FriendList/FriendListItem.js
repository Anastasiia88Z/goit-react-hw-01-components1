import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) =>
  friends.map(({ id, isOnline, avatar, name }) => (
    <li className="item" key={id}>
      <span className={isOnline ? 'isOnline' : 'isOffline'}></span>
      <img className={avatar} src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
      Name
    </li>
  ));

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendListItem;
