import { Section, Container, Heading } from 'components';

import { Profile } from '../Profile/Profile';
import { StatisticsList } from '../StatisticsList';
import { FriendList } from '../FriendList';
import { TransactionHistory } from '../TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Profile profile={user} />
        <Heading marginBottom="50px" textAlign="center">
          Upload stats
        </Heading>
        <StatisticsList title="Upload stats" stats={data} />
        <FriendList friends={friends} />;
        <TransactionHistory items={transactions} />;
      </Container>
    </Section>
  );
};