import random from 'lodash/random';
import size from 'lodash/size';

import { videos } from '@/utils/videos';

const RandomVideo = () => {
  const randomVideo = videos[random(0, size(videos) - 1, false)];

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${randomVideo}`}
        title="YouTube video player"
        allow="picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default RandomVideo;
