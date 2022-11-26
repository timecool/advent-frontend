import random from 'lodash/random';
import size from 'lodash/size';
import YouTube from 'react-youtube';

import { videos } from '@/utils/videos';

const RandomVideo = () => {
  const randomVideo = videos[random(0, size(videos) - 1, false)];

  return (
    <div className="flex items-center justify-center pt-16">
      <YouTube videoId={randomVideo} />
    </div>
  );
};

export default RandomVideo;
