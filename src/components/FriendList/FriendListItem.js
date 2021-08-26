import FriendList from './FriendList';

function FriendListItem({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li>
          <FriendList avatar={item.avatar} name={item.name} />
        </li>
      ))}
    </ul>
  );
}

export default FriendListItem;
