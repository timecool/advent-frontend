import { videos } from "@/utils/videos";
import size from "lodash/size";
import random  from "lodash/random";


const RandomVideo = () => {

  const randomVideo = videos[random(0,size(videos)-1,false)]
  
  return (
    <div>
      <iframe  src={"https://www.youtube.com/embed/"+randomVideo} title="YouTube video player" allow="picture-in-picture" allowFullScreen />
    </div>
  );
};

export default RandomVideo;
