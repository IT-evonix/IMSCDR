import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  number: string;
  title: string;
  color: "red" | "blue";
  Icon: LucideIcon;
}

const InfoCard = ({ number, title, color, Icon }: InfoCardProps) => {
  return (
    <div className="info_card">
      <div className="info_card_top">
        <div className={`info_card_number ${color}`}>{number}</div>

        <div className={`info_card_icon ${color}`}>
          <Icon size={34} strokeWidth={1.8} />
        </div>
      </div>

      <div className="info_card_content">{title}</div>

      <span className={`info_card_border ${color}`}></span>
    </div>
  );
};

export default InfoCard;
