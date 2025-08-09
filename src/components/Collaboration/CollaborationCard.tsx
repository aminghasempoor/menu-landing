
interface Props {
    title: string;
    description: string;
    Icon: React.ElementType;
}
const CollaborationCard = ({ title, description, Icon } : Props) => {
    return (
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md">
            <Icon className="w-14 h-14 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-orange-500/50 ">{title}</h3>
            <p className="text-gray-500 text-sm text-justify">{description}</p>
        </div>
    );
};

export default CollaborationCard;
