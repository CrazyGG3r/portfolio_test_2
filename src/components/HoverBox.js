import TextHoverBox from './TextHoverBox';
import NestedHoverBox from './NestedHoverBox';
import ImageHoverBox from './ImageHoverBox';

export default function HoverBox({ type, phrases, imageUrl, redirectUrl, onNestedClick, bgColor, hoverColor, textColor }) {
    switch (type) {
        case 'text':
            return <TextHoverBox phrases={phrases} />;
        case 'nested':
            return <NestedHoverBox phrases={phrases}
        onNestedClick={onNestedClick}
        bgColor={bgColor}
        hoverColor={hoverColor}
        textColor={textColor}
    />;
        case 'image':
            return <ImageHoverBox imageUrl={imageUrl} redirectUrl={redirectUrl} />;
        default:
            return null;
    }
}
function BackHoverBox({ onNestedClick, bgColor, hoverColor, textColor }) {
    return (
        <div
            className={`m-2 p-4 rounded-b-3xl rounded-t-2xl transition duration-300 ease-in-out group transform hover:scale-105 cursor-pointer ${bgColor} hover:${hoverColor}`}
            onClick={onNestedClick}
        >
            <p className={`transition duration-300 ease-in-out ${textColor}`}>
                Go Back
            </p>
        </div>
    );
}