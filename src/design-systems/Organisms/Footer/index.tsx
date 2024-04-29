import Typography from "@/design-systems/Atoms/Typography";

const Footer: React.FC = () => {
  return (
    <footer className=" flex flex-row items-center justify-between fixed bottom-0 left-0 right-0 w-full footer border-[1px] border-[#25272A] bg-[#1B1C1E] ">
      <div className="flex flex-row items-start justify-start gap-4 px-4 py-2">
        <Typography className="font-inter flex flex-row items-center justify-center gap-1 font-normal text-[12px] text-[#059669]">
          <div className="w-[6px] h-[6px] bg-[#059669] rounded-full "></div>
          Operational
        </Typography>
        <div className="h-[20px] mx-2 w-[1px] bg-[#25272A] " />

        <Typography className="font-inter font-normal text-[12px] text-[#6B7280]">
          Scheduled Update
        </Typography>
      </div>
      <div className="flex flex-row items-start justify-center gap-4  px-4 py-2">
        <Typography className="font-inter font-normal text-[12px] text-[#6B7280]">
          Help
        </Typography>{" "}
        <Typography className="font-inter font-normal text-[12px] text-[#6B7280]">
          Docs
        </Typography>{" "}
        <Typography className="font-inter font-normal text-[12px] text-[#6B7280]">
          Share Feedback
        </Typography>
      </div>
    </footer>
  );
};
export default Footer;
