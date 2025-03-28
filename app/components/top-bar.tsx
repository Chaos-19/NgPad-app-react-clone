import { useNavigate , useParams } from "react-router";
import { ArrowLeft } from "lucide-react";

interface Props {
    style?: string;
}

const TobBar = ({ style }: Props) => {
    const navigate = useNavigate();
    
    let { courseTitle } = useParams();

    return (
        <header className="w-full">
            <nav
                className={`flex items-center gap-5 p-4 ${
                    style ? style : "bg-[#092032]"
                }`}
            >
                <ArrowLeft
                    size={22}
                    className={!style ? "text-white" : ""}
                    onClick={() => navigate(-1)}
                />
                <h2
                    className="text-lg font-bold text-white"
                    dangerouslySetInnerHTML={{ __html: courseTitle }}
                />
            </nav>
        </header>
    );
};

export default TobBar;
