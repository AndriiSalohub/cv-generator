import { IoMdDownload } from "react-icons/io";
import "./DownloadButton.scss";

const DownloadButton = () => {
  return (
    <button className="download-btn">
      <IoMdDownload /> Download as PDF
    </button>
  );
};

export default DownloadButton;
