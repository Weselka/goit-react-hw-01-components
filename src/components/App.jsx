import { Profile } from './Profile';
import { StatisticsList } from './StatisticsList';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile profile={user} />
      <StatisticsList title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};

// export const App = () => {
//   return (
//     <div>
//       <UserAccount profile={user} />
//     </div>
//   );
// };
