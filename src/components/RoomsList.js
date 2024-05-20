import ColumnListHeader from './ColumnListHeader';
import ColumnListItem from './ColumnListItem';

const RoomsList = ({ items, currentId }) => {
  return (
    <>
      <ColumnListHeader>Rooms</ColumnListHeader>
      {items.map(({ metadata, header }) => {
        if (!header) {
          // Some rooms are empty.
          return null;
        }

        const selected = metadata.id === currentId;
        const path = `/rooms/${metadata.id}`;
        const label = `Room ${metadata.id}`;

        return (
          <ColumnListItem
            key={metadata.id}
            path={selected ? null : path}>
            {label}
          </ColumnListItem>
        );
      })}
    </>
  );
};

export default RoomsList;
