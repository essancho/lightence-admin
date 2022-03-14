import React, { useMemo } from 'react';
import { Feed } from '@app/components/common/Feed/Feed';
import { NotFound } from '@app/components/common/NotFound/NotFound';
import { RecentActivityItem } from '@app/components/nft-dashboard/recentActivity/recentActivityFeed/RecentActivityItem/RecentActivityItem';
import { Activity } from '@app/api/activity.api';
import * as S from './RecentActivityFeed.styles';

interface RecentActivityFeedProps {
  activity: Activity[];
  hasMore: boolean;
  next: () => void;
}

export const RecentActivityFeed: React.FC<RecentActivityFeedProps> = ({ activity, hasMore, next }) => {
  const activityItems = useMemo(
    () => activity.map((item, index) => <RecentActivityItem key={index} {...item} />),
    [activity],
  );

  return activityItems.length > 0 ? (
    <S.FeedWrapper id="recent-activity-feed" $length={activity.length}>
      <Feed hasMore={hasMore} next={next} target="recent-activity-feed">
        {activityItems}
      </Feed>
    </S.FeedWrapper>
  ) : (
    <NotFound />
  );
};
