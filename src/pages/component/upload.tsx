import { useState } from "react";
import { challenges } from "@/scripts/user";
import { FileUploader } from "react-drag-drop-files";
import Image from 'next/image'

interface Props {
  id: number
}

const Upload = (props:Props) => {
  const {id} = props
  const [uploadFile, setUploadFile] = useState<File|null>()
  const handleChange = (file:File|null) => {
    setUploadFile(file)
  };
  
  const submit = ()=> {
    if(uploadFile){
      challenges(id, uploadFile)
    }
  }
  return (
    <div className=" flex lg:flex-cols flex-rows gap-3">
      <div className="border border-dashed p-2 w-4/6" style={{borderColor:"#1177ab"}}>
      <FileUploader handleChange={handleChange} name="file">
        <div className="w-full flex gap-3 items-center ">
        <Image src="/assets/images/upload.png" alt="Upload" height={25} width={31} className={"w-6 h-8"} />
        {uploadFile ?<div className="w-full">{uploadFile.name} <span className="float-right cursor-pointer" onClick={()=> setUploadFile(null)}>X</span></div>:<> Hier klicken oder Datei per Drag & Drop hineinziehen</>}
         
        </div>
      </FileUploader>
      </div>
      <button disabled={!uploadFile} className="px-16 py-3 font-bold " style={{background:"#1177ab"}} onClick={submit}>Abschicken</button>
    </div>
  );
};

export default Upload;
