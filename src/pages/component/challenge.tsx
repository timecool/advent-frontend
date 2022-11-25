import { IChallenge } from "@/model/challenge";
import { IUserChallenge } from "@/model/user-challenge";
import map from "lodash/map";
import { Fragment } from "react";
import YouTube from 'react-youtube';
import UploadSection from "./upload-section";

interface Props {
  challenge: IChallenge
  uploads: IUserChallenge[]

}
const Challenge = (props: Props) => {
  const { challenge, uploads } = props

  return (
    <div className="overflow-hidden tk-karmina-sans">
      <div className="font-bold text-4xl text-center">{challenge.title}</div>
      <div className="pt-5 text-xl text-center">{challenge.descriptions}</div>

      <div className="pt-5 flex overflow-x-hidden items-center lg:flex-row xl:flex-row flex-col justify-center gap-3" >
        {map(challenge.videoLinks, video => <Fragment  key={video}>
          <YouTube videoId={video} opts={{height:250, width:450}}  />
        </Fragment>
        )}
      </div>
      <div className="py-5">
        <div className="border-t-2 border-dotted " style={{borderColor:"#1177ab"}}  />
      </div>

      <div className="font-bold text-2xl text-center">Upload</div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-3 xl:px-20">
        <div className="flex gap-5 items-center">
          <div className="relative w-12">
          <div className="w-12 h-12 rounded-full items-center" style={{ background: "#ea5172" }}>
            <div className="font-bold text-2xl text-center">{challenge.points}</div>
            <div className="text-bold -mt-2">Punkte</div>
          </div>
          </div>
          <div className=" lg:w-2/3 text-md">
            Lade deine Datei hier hoch. Nach einer Überprüfung bekommst du die Punkte zugeschrieben.</div>
        </div>
        <div className="pt-5 md:pt-0">
          <UploadSection id={challenge.id} uploads={uploads} />
        </div>
      </div>


    </div>
  );
};

export default Challenge;
